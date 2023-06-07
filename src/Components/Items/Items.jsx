import React from 'react';
import { View, Alert, FlatList, TouchableOpacity } from 'react-native';
import { Card } from '../../Components/Items/Cards';

const cardData = [
  { id: '1', content: 'Food', logoImage: require('../../../assets/food_logo.png') },
  { id: '2', content: 'Fun', logoImage: require('../../../assets/birthday_fun-removebg.png') },
  { id: '3', content: 'Health', logoImage: require('../../../assets/injection-removebg.png') },
  { id: '4', content: 'Food', logoImage: require('../../../assets/food_logo.png') },
  { id: '5', content: 'Fun', logoImage: require('../../../assets/birthday_fun-removebg.png') },
  { id: '6', content: 'Health', logoImage: require('../../../assets/injection-removebg.png') },
  { id: '7', content: 'Food', logoImage: require('../../../assets/food_logo.png') },
  { id: '8', content: 'Fun', logoImage: require('../../../assets/birthday_fun-removebg.png') },
  { id: '9', content: 'Health', logoImage: require('../../../assets/injection-removebg.png') },
  // Add more card data as needed
];

const Items = (props) => {
  const renderCard = ({ item }) => (
    <TouchableOpacity onPress={()=>props.navigation.navigate('Camera')}>
      <Card
      title={item.title}
      content={item.content}
      logoImage={item.logoImage}
    />
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1}}>
      <FlatList
        data={cardData}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        numColumns={3}
      />
    </View>
  );
};

export default Items;
