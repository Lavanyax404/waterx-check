import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { post_list } from './../../assets/images/assests';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

const PostList = () => {
  return (
    <View style={styles.postContainer}>
      <FlatList
        data={post_list}
        keyExtractor={(item) => item.id.toString()} // Ensure unique IDs
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.postCard}>

            {/* User Info */}
            <View style={styles.postUserNameContainer}>
              <Image
                source={item.profileImg}
                style={styles.profileImage}
              />
              <Text style={styles.userName}>{item.userName}</Text>
            </View>

            {/* Divider */}
            <View style={styles.divider} />

            {/* Post Content */}
            <Text style={styles.heading}>{item.heading}</Text>
            <Text style={styles.tags}>{item.hashTags}</Text>

            {/* Post Image */}
            {item.img && (
              <View style={styles.imageContainer}>
                <Image source={item.img} style={styles.postImage} />
              </View>
            )}

            {/* Divider */}
            <View style={styles.divider} />

            {/* Social Actions */}
            <View style={styles.socialContainer}>
              <View style={styles.socialContainerLeft}>
                <View style={styles.btnContainer}>
                  <Text style={styles.voteText}>{item.upVote}</Text>
                  <Entypo name="arrow-bold-up" size={20} color="black" />
                </View>

                <View style={styles.btnContainer}>
                  <Text style={styles.voteText}>{item.downVote}</Text>
                  <Entypo name="arrow-bold-down" size={20} color="black" />
                </View>

                <View style={styles.btnContainer}>
                  <FontAwesome name="comment-o" size={20} color="black" />
                  <Text style={styles.voteText}>{item.comments}</Text>
                </View>
              </View>
              <View style={styles.shareContainer}>
                <AntDesign name="sharealt" size={20} color="black" />
              </View>
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default PostList;

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fff', 
  },
  listContent: {
    padding: 10,
  },
  postCard: {
    width: '100%',
    backgroundColor: '#e0ebeb',
    borderRadius: 10,
    borderColor: '#c1d7d7',
    borderWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    marginBottom: 20,
    padding: 10,
    flex:1
  },
  postUserNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 20, 
    marginRight: 15, 
  },
  userName: {
    fontFamily: 'outfit-bold',
    fontSize: 17,
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    width: '100%',
    marginVertical: 4,
  },
  heading: {
    fontFamily: 'outfit-bold',
    fontSize: 18,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  tags: {
    fontFamily: 'outfit',
    fontSize: 13,
    paddingHorizontal: 8,
    color: '#555',
  },
  imageContainer: {
    padding: 12,
  },
  postImage: {
    height: 280,
    width: '100%',
    borderRadius: 10,
    resizeMode: 'cover', // Ensures the image covers the space without distortion
  },
  socialContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom:4
  },
  socialContainerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15, // Space between buttons
  },
  voteText: {
    marginRight: 5,
    fontSize: 16,
    color: '#000',
  },
  shareContainer: {
    paddingRight: 18,
  },
});
