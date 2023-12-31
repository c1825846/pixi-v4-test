# Тестовое задание на вакансию HTML5/JavaScript Developer

## Исходное задание

### Необходимо написать приложение на TypeScript:

- используя любой фон 1000х600;
- используя любую анимацию в центре экрана (минимальный размер анимации 400х400, минимальное число кадров 5);
- анимация должна воспроизводиться с помощью Pixi JS v4;
- при клике мышкой по экрану анимация должна плавно перемещаться в место клика (траектория по возможности должна нелинейной).
- приложение должно работать как в десктопных браузерах (Mozilla, Chrome, IE11), так и в мобильных браузерах (Chrome, Safari, Android Browser);
- приложение должно масштабироваться (scaling) в десктопных браузерах до максимального значения 1280х768, при масштабировании должно центрироваться в окне браузера, коэффициент масштабирования должен вычисляться по меньшей стороне;
- приложение должно масштабироваться в мобильных браузерах до максимально возможного значения, при масштабировании центрироваться в окне, коэффициент масштабирования должен вычисляться по меньшей стороне;
- в мобильных браузерах приложение должно открываться в полноэкранный режим по первому нажатию или свайпу, далее приложение должно оставаться в полноэкранном режиме.

### Требования к коду, стилю и параметризации

- при выполнении задания нужно продемонстрировать владение принципами и приемами объектно-ориентированного программирования (ООП): умение выделять сущности и объекты
- если берётся за основу готовый пример с сайта PixiJs, то код должен быть приведен к ООП
- все динамические\настраиваемые параметры необходимо выносить в конфигурационные фалы, например размер игрового поля

## Запуск

```bash
npm i && npm run dev
```

Использовалась нода v16.14.2

## Комментарии

Не очень понял что значит _анимация должна воспроизводиться с помощью Pixi JS v4_, сделал через `AnimatedSprite`, вообще обычно делал через Dragonbones или Spine, либо через твины.

Переход в полноэкранный режим сделал как демонстрацию работы с `Fullscreen Api` без вертиальной адаптации бэкграунда.

В конфиги вынес только размеры окна и игрыю Можно было бы выносить отдельно ключи ассетов, а потмо юзать их в нужных местах, но упарываться не стал, показал только принцип, по которому бы я выносил.

Вынес логику перемещения в миксин чтобы в будущем можно было развешивать на нужные контейнера.

Можно было бы разбить элементы из `components` на какие-нибудь типа коровых/абстрактных и конкретных, собранных из коровых через DI и миксины.

Да, комиты написаны погано.
