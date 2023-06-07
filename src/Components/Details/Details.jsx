import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Card } from '../../Components/Items/Cards';

const cardData = [
  { id: '1', content: 'Food', logoImage: require('../../../assets/food_logo.png') },
  { id: '2', content: 'Fun', logoImage: require('../../../assets/birthday_fun-removebg.png') },
  { id: '3', content: 'Health', logoImage: require('../../../assets/injection-removebg.png') },
  // Add more card data as needed
];

const Details = (props) => {
  const renderCard = ({ item }) => (
    <TouchableOpacity  onPress={()=>props.navigation.navigate('Details')}>
      <Card
      title={item.title}
      content={item.content}
      logoImage={item.logoImage}
    />
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 , flexDirection:'row'}}>
      <FlatList
        data={cardData}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        numColumns={3}
      />
    </View>
  );
};

export default Details;
