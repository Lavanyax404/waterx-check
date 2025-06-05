import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from './../../components/Home/Header';
import Categories from '../../components/Home/Categories';
import PostList from '../../components/Home/PostList';

const Home = () => {
   return (
      <View style={styles.container}>
         {/* Header and Categories */}
         <View style={styles.headerContainer}>
            <Header />
            <Categories />
         </View>

         {/* Post List */}
         <PostList />
      </View>
   );
};

export default Home;

const styles = StyleSheet.create({
   container: {
      flex: 1, // Ensure the container takes up the full screen
      backgroundColor: '#fff',
   },
   headerContainer: {
      height: 130,
      backgroundColor: '#d4d6d6',
      justifyContent: 'space-between',
   },
});
