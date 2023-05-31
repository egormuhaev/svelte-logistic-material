<script>
  import { beforeUpdate, onDestroy } from "svelte";
  import {
    resultPageState,
    createTransportationParametersState,
  } from "../../../store/store";

  export let route;
  export let volume;
  export let trList;
  export let res;
  export let countCarsRase = 0;
  export let time;
  export let distance;

  const unsubscribe2 = createTransportationParametersState.subscribe(
    (value) => {
      volume = value.foundation.v;
      trList = [...value.transport.activeList];
    }
  );

  const getTimeVal = (str) => {
    if (str.indexOf("ч") !== -1) {
      return (
        Number(str.split(" ")[0].replace("ч", "").replace("мин.", "")) * 60
      );
    } else {
      return Number(str.split(" ")[0].replace("мин.", "").replace("ч", ""));
    }
  };

  const getDistVal = (str) => {
    console.log(str.split(" ")[0].replace(",", ".").replace("км", ""));
    return Number(str.split(" ")[0].replace(",", ".").replace("км", ""));
  };

  const resUp = () => {
    let a = 0;
    trList.map((car) => {
      a = a + car.volume * car.count;
    });
    countCarsRase = Math.ceil(volume / a);
  };

  const unsubscribe = resultPageState.subscribe((value) => {
    route = { ...value.route };
    console.log(`Dist: ${getDistVal(value.route.distance)}`);
    console.log(`Time: ${getTimeVal(value.route.time)}`);
    console.log(
      `Res: ${
        getTimeVal(value.route.time) < 90 &&
        getDistVal(value.route.distance) < 70
      }`
    );
    res =
      getTimeVal(value.route.time) < 90 &&
      getDistVal(value.route.distance) < 70;
  });

  resUp();

  onDestroy(() => {
    unsubscribe();
    unsubscribe2();
  });
</script>

<div class="modal">
  <h1 class="sub-title">Маршрут</h1>
  <p class="t1">{`Время в пути: ${route.time}`}</p>
  <p class="t1">{`Расстояние: ${route.distance}`}</p>
  <p class="t1">{`Кол-во рейсов: ${countCarsRase}`}</p>
  {#if route.blocked}
    <p class="t2">Имеются заблокированные участки дороги</p>
  {/if}

  {#if res}
    <div class="res-true">
      <div class="btn-true">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.9983 1.04997C13.4488 0.994829 13 1.44772 13 2.00001V10C13 10.5523 13.4477 11 14 11H22C22.5523 11 23.0052 10.5512 22.95 10.0017C22.8526 9.03092 22.6135 8.07783 22.2388 7.17317C21.7363 5.95992 20.9997 4.85753 20.0711 3.92894C19.1425 3.00035 18.0401 2.26376 16.8268 1.76121C15.9222 1.38649 14.9691 1.14737 13.9983 1.04997ZM20.9501 13.9984C21.0052 13.4488 20.5523 13 20 13H12C11.4477 13 11 12.5523 11 12V4.00001C11 3.44772 10.5512 2.99483 10.0016 3.04996C8.37657 3.21301 6.81071 3.77231 5.4443 4.68531C3.79981 5.78412 2.51809 7.34591 1.76121 9.17317C1.00433 11.0004 0.806299 13.0111 1.19215 14.9509C1.578 16.8907 2.53041 18.6726 3.92894 20.0711C5.32746 21.4696 7.10929 22.422 9.0491 22.8079C10.9889 23.1937 12.9996 22.9957 14.8268 22.2388C16.6541 21.4819 18.2159 20.2002 19.3147 18.5557C20.2277 17.1893 20.787 15.6234 20.9501 13.9984Z"
            fill="white"
          />
        </svg>
      </div>
      Подходит
    </div>
  {:else}
    <div class="res-false">
      <div class="btn-false">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 16.9V22.9552C5.3935 22.4499 1 17.7381 1 12C1 6.26198 5.3935 1.55009 11 1.04486V7.10004C8.71776 7.56331 7 9.58106 7 12C7 14.419 8.71776 16.4367 11 16.9ZM13 7.10004V1.04486C18.2771 1.52041 22.4796 5.72287 22.9552 11H16.9C16.5023 9.04088 14.9591 7.49772 13 7.10004ZM16.9 13C16.5023 14.9591 14.9591 16.5023 13 16.9V22.9552C18.2771 22.4796 22.4796 18.2771 22.9552 13H16.9Z"
            fill="white"
          />
        </svg>
      </div>
      Не подходит
    </div>
  {/if}
</div>

<style>
  .btn-true {
    margin: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 31px;
    width: 31px;

    border-radius: 4px;
    border: none;
    background-color: #79d196;
  }
  .res-true {
    gap: 10px;
    color: #79d196;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .btn-false {
    margin: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 31px;
    width: 31px;

    border-radius: 4px;
    border: none;
    background-color: #d85b5b;
  }
  .res-false {
    gap: 10px;
    color: #d85b5b;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .sub-title {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;

    color: #79d196;
  }
  .t1 {
    color: #252525;
    font-size: 15px;
  }
  .t2 {
    color: #d85b5b;
    font-size: 10px;
  }
  .modal {
    margin-top: 200px;
    position: absolute;
    z-index: 100000;

    background-color: #fff;

    height: 210px;
    width: 247px;

    box-sizing: border-box;
    padding: 5px;

    left: auto;
    right: 20px;

    border-radius: 4px;

    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
</style>
