import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../Styles/GeneralStyle';

const DatesSelector = props => {
  const DateCalculator = days => {
    let nextDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
    return nextDate.getDate();
  };

  const DateCalculator2 = date => {
    var days = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let nextDate = new Date(Date.now());
    let setNextDate = new Date(new Date().getTime() + (86400000 * props.index));
    var d = new Date(setNextDate);
 
    return days[d.getDay()];
  };

  const [selectday, setselectday] = useState(false);
  var today = new Date();
  const todayDate = String(new Date().getDate()).padStart(2, '0');

  return (
    <TouchableOpacity
      onPress={() => setselectday(!selectday)}
      style={
        todayDate == props.item
          ? [styles.upperHomeDatesStyle, {backgroundColor: '#508EF3'}]
          : [styles.upperHomeDatesStyle]
      }>
      <Text style={styles.small}>{DateCalculator2(props.item -1)}</Text>
      <Text style={styles.small}>{props.item}</Text>
    </TouchableOpacity>
  );
};

export default DatesSelector;
