import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import styles from "./styles";

const List = ({ title, list, horizontal }) => {
  const [contentList, setContentList] = useState([]);

  function accessLink(url) {
    Linking.openURL(url);
  }

  useEffect(() => {
    console.log(list);
    setContentList(list);
  }, [list]);

  const Item = ({ title, content, link }) => (
    <View style={styles.view}>
      <Text style={styles.viewTitle}>{title}</Text>
      <Text style={styles.viewContent}>{content}</Text>

      <TouchableOpacity
        style={styles.containerLink}
        onPress={() => accessLink(link)}
      >
        <Text style={styles.viewLink}>Acessar Link</Text>
      </TouchableOpacity>
    </View>
  );

  const ItemHorizontal = ({ title, link, image }) => (
    <TouchableOpacity
      style={styles.viewHorizontal}
      onPress={() => accessLink(link)}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.viewTitleHorizontal}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={contentList}
        horizontal={horizontal}
        style={styles.flatList(horizontal)}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          horizontal ? (
            <Item title={item.title} content={item.content} link={item.link} />
          ) : (
            <ItemHorizontal
              title={item.title}
              content={item.content}
              link={item.link}
              image={item.img}
            />
          )
        }
      />
    </View>
  );
};

export default List;
