import React, { useState } from "react";
import { Group, Indicator, Avatar
 } from '@mantine/core';
import { Calendar } from '@mantine/dates'
import dayjs from "dayjs";

function Tasks() {
    const [selected, setSelected] = useState("");
  const handleSelect = (date) => {
    console.log("SeLECTEd DATe", date)
    // const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'));
    // if (isSelected) {
    //   setSelected((current) => current.filter((d) => !dayjs(d).isSame(date, 'date')));
    // } else if (selected.length < 3) {
    //   setSelected((current) => [...current, date]);
    setSelected(date) //idi change single date selected 
    // }
  };
  return (
    <Group position="center">
      <Calendar
        renderDay={(date) => {
            //  eee component emo displaying od dates that is 1 2 3 avi handle chestadi
          const day = date.getDate();
          return (
            // <Indicator size={6} color="red" offset={-2} disabled={day !== 16}>
        (day==18)?(

            <Avatar radius="lg" color="yellow" >

                <div>{day}</div>
            </Avatar>
        ):<div>{day}</div>
            // </Indicator>
          );
        }}
        getDayProps={(date) => ({
            // eee component emo date selection lo help chestadi  
            //ippudu vere month date ichina ostada
            //like oka array lo dates from different monthsem ravali neek ?
    // highlight ra valaida adi if condition marchatame like ippudu ne get date anthe nak 1 2 3 ala istadi adi check chey get month emo  emo will give u month dani tho compare cheyatame
    //haa gotcha ardam hua?////???///////?//??????????
    //issame em chestadisame oo kado check chestadi anthe adi kotta compoonent dayjs dantlodi adi helps in handaling the date formated and time formated data.
            selected: dayjs(date).isSame(selected, 'date'), // ee line emo edi selected components oo cheppidi which is responsible for that bluecolor
            onClick: () => handleSelect(date), // idi date click handle chestadi   yes done ha ippudu only single date slect anthe just change that selected varaiable as asingle component rather than an array.
          })}
      />
    </Group>
  );
}


export default Tasks;