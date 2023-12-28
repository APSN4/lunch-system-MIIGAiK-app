/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
  TopNavigation,
  Avatar,
  Input,
  ViewPager
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */

const HeartIcon = (props) => (
  <Icon {...props} name='heart'/>
);

const renderTitle = (props) => (
    <View style={styles.titleContainer}>
      <Avatar
        style={styles.logo}
        source={require('./src/assets/icon.36f92bd4.png')}
      />
      <Text {...props}>
Мария
      </Text>
    </View>
);

const renderTitleScores = (props) => (
  <View style={styles.titleContainer}>
    <Button
      style={styles.score}
      size='small'
      accessoryRight={StarIcon}
    >
      430
    </Button>
  </View>
);

const StarIcon = (props) => (
  <Icon
    {...props}
    name='star'
  />
);

const Card = (props) => (
  <View {...props}>
    <Image
        style={styles.tinyLogo}
        source={props.imageSource}
      />
    <Text category='label' style={styles.textCard}>
      {props.cardText}
    </Text>
  </View>
);

const BigCard = (props) => (
  <View {...props}>
    <Image
        style={styles.BigLogo}
        source={props.imageSource}
      />
    <Text category='s1' style={styles.textCardBig}>
      {props.cardText}
    </Text>
    <Text category='s2' style={{}}>
      {props.cardTextBottom}
    </Text>
  </View>
);

const SmallCard = (props) => (
  <View {...props}>
    <Image
        style={styles.SmallLogo}
        source={props.imageSource}
      />
    <Text category='s2' style={styles.textCard}>
      {props.cardText}
    </Text>
  </View>
);

export const ViewPagerSimpleUsageShowcase = (props) => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <ViewPager
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
    >
      <Layout
        style={styles.tab}
        level='2'
      >
        <Text category='h5'>
USERS
        </Text>
      </Layout>
      <Layout
        style={styles.tab}
        level='2'
      >
        <Image
        style={styles.banners}
        source={props.imageSource}
      />
      </Layout>
      <Layout
        style={styles.tab}
        level='2'
      >
        <Image
        style={styles.banners}
        source={props.imageSource2}
      />
      </Layout>
    </ViewPager>
  );
};

export default () => (
  <>
    <ScrollView>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...eva} theme={eva.dark}>
        <Layout style={styles.container}>
        <TopNavigation
            title={renderTitle}
            accessoryRight={renderTitleScores}
          />
          <Input style={styles.search}
            placeholder='Найдите свой десерт'
          />

          <View style={{flex: 0, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}} >
            <Card
              style={styles.card}
              header={Card}
              imageSource={require('./src/assets/dish1.png')}
              cardText='Второе блюдо'
            >
            </Card>
            <Card
              style={styles.card}
              header={Card}
              imageSource={require('./src/assets/dish2.png')}
              cardText='Первое блюдо'
            ></Card>
          </View>

          <ViewPagerSimpleUsageShowcase
          imageSource={require('./src/assets/dizayn-bannera-kafe-zdorovogo-pitaniya-fifty-food.jpg')}
          imageSource2={require('./src/assets/banner2.jpg')}
          />

          <Text style={{alignSelf: 'flex-start', paddingLeft: 15, paddingTop: 7}} category='h5'>
            Категории
          </Text>

          <View style={{flex: 0, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}} >
            <SmallCard
              style={styles.cardSmall}
              header={Card}
              imageSource={require('./src/assets/never-drink-soda.jpg')}
              cardText='Напитки'
            >
            </SmallCard>
            <SmallCard
              style={styles.cardSmall}
              header={Card}
              imageSource={require('./src/assets/soup-7.jpg')}
              cardText='Супы'
            >
            </SmallCard>
            <SmallCard
              style={styles.cardSmall}
              header={Card}
              imageSource={require('./src/assets/desert.jpeg')}
              cardText='Десерты'
            >
            </SmallCard>
            <SmallCard
              style={styles.cardSmall}
              header={Card}
              imageSource={require('./src/assets/salad.jpg')}
              cardText='Салаты'
            >
            </SmallCard>
          </View>

          <View style={{flex: 0, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}} >
            <BigCard
              style={styles.card}
              header={BigCard}
              imageSource={require('./src/assets/burger_big.jpg')}
              cardText='Бургер с креветками'
              cardTextBottom='⭐ 4.7 Отлично(20+) Фастфуд'
            >
            </BigCard>
            <BigCard
              style={styles.card}
              header={BigCard}
              imageSource={require('./src/assets/Moqueca-1.jpg')}
              cardText='Бразильский суп'
              cardTextBottom='⭐ 4.8 Отлично(30+) Супы'
            >
            </BigCard>
          </View>

          <Text style={styles.text} category='h6'>
            Новая столовая МИИГАиК 😻
          </Text>
          <Button style={styles.likeButton} accessoryLeft={HeartIcon}>
            Поделиться
          </Button>
        </Layout>
      </ApplicationProvider>
    </ScrollView>
  </>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginHorizontal: 16,
  },
  score: {
    marginHorizontal: 4,
    borderRadius: 16,
  },
  search: {
    marginHorizontal: 7,
    borderRadius: 16,
    marginTop: 7,
  },
  card: {
    margin: 2,
    borderRadius: 20,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
  },
  cardSmall: {
    margin: 2,
    borderRadius: 20,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingTop: 10,
    paddingRight: 5,
  },
  tinyLogo: {
    width: 130,
    height: 130,
    borderRadius: 15,
  },
  textCard: {
    textAlign: 'center',
  },
  textCardBig: {
    textAlign: 'left',
    paddingTop: 3
  },
  BigLogo: {
    width: 330,
    height: 140,
    borderRadius: 15,
  },
  SmallLogo: {
    width: 65,
    height: 65,
    borderRadius: 15,
  },
  tab: {
    height: 192,
    alignItems: 'center',
    justifyContent: 'center',
  },
  banners: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
