<template>
  <div class="order">
    <form class="order__left" action="#" method="post">
      <div class="order__title">Оформление заказа</div>
      <div class="order__subtitle">1. Введите Ваши данные</div>
      <div class="order__grid">
        <label class="order__label order__row-2">
          <input
            class="input"
            type="text"
            name=""
            placeholder="Ваше Имя"
            required
          />
        </label>
        <label class="order__label order__row-2">
          <input
            class="input"
            type="text"
            name=""
            placeholder="Ваша Фамилия"
            required
          />
        </label>
        <label class="order__label order__row-4">
          <input
            class="input"
            type="tel"
            name=""
            placeholder="Номер телефона"
            required
          />
        </label>
        <label class="order__label order__row-4">
          <input
            class="input"
            type="email"
            name=""
            placeholder="Почтовый адрес Email"
            required
          />
        </label>
        <div class="order__address order__row-2">
          109341, Москва, Нижняя Красносельская, 35с49, 408
        </div>
        <div class="order__add order__row-2">
          <svg class="icon">
            <use xlink:href="#plus" />
          </svg>
        </div>
      </div>
      <div class="order__wr">
        <div class="order__subtitle">2. Дата и время</div>

        <div class="timepicker">
          <div class="timepicker__title">Раскрыть календарь</div>
          <div class="timepicker__content">
            <div class="timepicker__head">
              <button
                type="button"
                class="timepicker__arrow timepicker__arrow-prev"
              >
                <svg class="icon">
                  <use xlink:href="#left" />
                </svg>
              </button>
              <div class="timepicker__date">
                <div class="timepicker__date_item"><b>ПН</b> 18</div>
                <div class="timepicker__date_item"><b>ВТ</b> 19</div>
                <div class="timepicker__date_item"><b>СР</b> 20</div>
                <div class="timepicker__date_item"><b>ЧТ</b> 21</div>
                <div class="timepicker__date_item"><b>ПТ</b> 22</div>
                <div class="timepicker__date_item"><b>СБ</b> 23</div>
                <div class="timepicker__date_item"><b>ВС</b> 24</div>
              </div>
              <button
                type="button"
                class="timepicker__arrow timepicker__arrow-next"
              >
                <svg class="icon">
                  <use xlink:href="#left" />
                </svg>
              </button>
            </div>
            <div class="timepicker__times">
              <ul class="timepicker__times_list">
                <li class="timepicker__times_item">14</li>
                <li class="timepicker__times_item active">15</li>
                <li class="timepicker__times_item">16</li>
              </ul>
              <ul class="timepicker__times_list">
                <li class="timepicker__times_item">:</li>
                <li class="timepicker__times_item active">:</li>
                <li class="timepicker__times_item">:</li>
              </ul>
              <ul class="timepicker__times_list">
                <li class="timepicker__times_item">20</li>
                <li class="timepicker__times_item active">21</li>
                <li class="timepicker__times_item">22</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="datepicker">
          <button class="datepicker__cancel" type="button">
            <svg class="icon">
              <use xlink:href="#close" />
            </svg>
          </button>
          <div class="datepicker__calendar">
            <div class="datepicker__head">
              <button
                type="button"
                class="datepicker__arrow datepicker__arrow-prev"
              >
                <svg class="icon">
                  <use xlink:href="#left" />
                </svg>
              </button>
              <span>МАЙ</span>
              <button
                type="button"
                class="datepicker__arrow datepicker__arrow-next"
              >
                <svg class="icon">
                  <use xlink:href="#left" />
                </svg>
              </button>
            </div>
            <div class="datepicker__content">
              <div class="datepicker__days">
                <span>ПН</span>
                <span>ВТ</span>
                <span>СР</span>
                <span>ЧТ</span>
                <span>ПТ</span>
                <span>СБ</span>
                <span>ВС</span>
              </div>
              <div class="datepicker__wr">
                <div
                  v-for="i in 10"
                  :key="i + 'r'"
                  class="datepicker__item disabled"
                >
                  {{ i }}
                </div>
                <div
                  v-for="i in 10"
                  :key="i + 'k'"
                  class="datepicker__item disabled"
                >
                  {{ i }}
                </div>
                <div class="datepicker__item active">18</div>
                <div v-for="i in 10" :key="i + 't'" class="datepicker__item">
                  s
                  {{ i }}
                </div>
              </div>
            </div>
            <div class="datepicker__time js-show-timepicker">
              <span>15</span> : <span>21</span>
            </div>
          </div>
          <button class="datepicker__accept" type="button">
            <svg class="icon">
              <use xlink:href="#tick" />
            </svg>
          </button>
        </div>
      </div>
      <div class="order__grid">
        <div class="order__date gradient order__row-1">
          <div class="order__date_number">9</div>
          <div class="order__date_month">мая</div>
          <div class="order__date_day">Сегодня</div>
        </div>
        <div class="order__date active gradient order__row-1">
          <div class="order__date_number">10</div>
          <div class="order__date_month">мая</div>
          <div class="order__date_day">Завтра</div>
        </div>
        <div class="order__date gradient order__row-1">
          <div class="order__date_number">11</div>
          <div class="order__date_month">мая</div>
          <div class="order__date_day">Понедельник</div>
        </div>
        <div class="order__date gradient order__row-1">
          <div class="order__date_number">12</div>
          <div class="order__date_month">мая</div>
          <div class="order__date_day">Вторник</div>
        </div>

        <div class="order__time gradient order__row-1">С 11:00 до 15:00</div>
        <div class="order__time gradient order__row-1">С 15:00 до 18:00</div>
        <div class="order__time gradient active order__row-1">
          С 18:00 до 21:00
        </div>
        <div class="order__time gradient order__row-1 js-show-datepicker">
          Вручную
        </div>

        <label class="order__label order__row-4">
          <input
            class="input"
            type="text"
            name=""
            placeholder="Комментарий"
            required
          />
        </label>
      </div>

      <div class="order__bottom order__grid">
        <div class="order__total order__row-2">ИТОГО: 21 600 ₽</div>
        <button class="order__btn gradient order__row-2" type="submit">
          Оформить заказ
        </button>
      </div>

      <div class="order__info">
        Нажимая на кнопку «Оформить заказ» вы соглашаетесь
        <a href="#" class="order__poly"
          >с политикой обработки персональных данных и пользовательсикм
          соглашением</a
        >
      </div>
    </form>

    <div class="order__right">
      <div class="order__top">
        <a href="#" class="order__print">
          <svg class="icon">
            <use xlink:href="#printer" />
          </svg>
        </a>
        <UserNav />
      </div>

      <ul class="order__list">
        <li v-for="i in 3" :key="i" class="order__item">
          <div class="order__name">Barvy Orange {{ i }}</div>
          <div class="order__size">100гр</div>
          <div class="order__line">Core</div>
          <div class="order__count count">
            <button class="count__minus" type="button">
              <svg class="icon">
                <use xlink:href="#minus" />
              </svg>
            </button>
            <label class="count__label">
              <input type="text" class="count__input" value="25" readonly />
            </label>
            <button class="count__plus" type="button">
              <svg class="icon">
                <use xlink:href="#plus" />
              </svg>
            </button>
          </div>
          <div class="order__price">555 ₽</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import UserNav from '@/components/layouts/UserNav'
export default {
  name: 'Order',
  components: { UserNav },
  head: {
    title: 'FiXmoke - Оформление',
  },
}
</script>
