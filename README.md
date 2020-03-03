# React Test

## โจทย์

* project นี้จะมี 2 component คือ video กับ slide ให้ทำการเชื่อมต่อกันผ่าน redux หรือ context
* เมื่อมีการเปลี่ยนแปลงเวลาใน component video ให้ไปเช็คกับตัวแปร

```javascript
const slidedata = [
  {
    time: 0,
    type: "image",
    url: "https://picsum.photos/id/101/800/450"
  },
  {
    time: 14,
    type: "image",
    url: "https://picsum.photos/id/1/800/450"
  },...
```

เมื่อเวลาใน video มากกว่าเวลาใน `slidedata.time` ให้เปลี่ยน slide ไปที่รูปถัดไป

* เมื่อจบ video ให้ แสดง Modal และปุ่ม replay ขึ้นมา
* เมื่อกดปุ่มให้ทำการเล่น Video ซ้ำ และ slide ไปที่ slide 0 เหมือนเดิม

## Event

```javascript
const timeupdateHandler = e => {
    let mytime = player.currentTime(); // current time
    let endTime = player.duration(); // end Time
    ...
```

ถูกเรียกเมื่อเวลาใน video เปลี่ยน

```javascript
const handleChangeSlide = duration => {
    let slideIndex = 0;
    // condition
    ...
    // end condition
    slide.slickGoTo(slideIndex);
  };
```

ส่วน ... ใส่เงื่อนไขเข้าไปเพื่อดักการเปลี่ยนหน้า

```javascript
useEffect(() => {
    handleChangeSlide(contextOrRedux.duration);
  }, [contextOrRedux.duration]);
```
ส่วนนี้ comment ไว้ เพื่อฟัง context duration หรือ redux duration จาก video เมื่อเปลี่ยน เรียก function `handleChangeSlide` เพื่อทำการเปลียน slide ต่อไป
