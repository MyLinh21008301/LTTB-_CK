import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { useState, useEffect } from 'react'

export default function App() {
  const [medi, setMedi] = useState();
  useEffect(() => {
    fetch('http://localhost:3000/medi')
      .then(response => response.json())
      .then(data => setMedi(data))
      .catch(error => console.error('Error fetching medi:', error));
  }, []);
  const renderMedi = ({ item }) => (
    <View style={styles.contentItem}>
      <Image source={{ uri: item.image }} style={styles.imgItem} />
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.priceBox}>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.rattingBox}>
          <Image source={require('../stt18_21008301_hoangthimylinh_29/assets/img/anh06.png')} style={styles.start} />
          <Text style={styles.ratting}>{item.ratting}</Text>
        </View>
      </View>
      <Text style={styles.disrec}>{item.direc}</Text>
      <TouchableOpacity>
        <Text style={styles.btnRead}>Read More</Text>
      </TouchableOpacity>
    </View>
  );
  console.log(medi);
  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <View style={styles.searchBox} >
          <Image source={require('../stt18_21008301_hoangthimylinh_29/assets/img/anh01.png')} style={styles.iconSearch} />
          <TextInput style={styles.search}
            placeholder='Medicine, Hospital, Doctor, etc'
          >
          </TextInput>
        </View>
        <View style={styles.loc}>
          <Image source={require('../stt18_21008301_hoangthimylinh_29/assets/img/anh02.png')} style={styles.iconLoc} />
        </View>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.banerBox}>
          <Image source={require('../stt18_21008301_hoangthimylinh_29/assets/img/anh03.png')} style={styles.banner} />
          <View style={styles.txtBox}>
            <Text style={styles.txt1}>Free Consultation</Text>
            <Text style={styles.txt2}>Feel free to consult with one of our experienced doctors for personalized advice.</Text>
          </View>
        </View>
        <View style={styles.contentTitle}>
          <Text style={styles.title1}>Hello, Yael Amari</Text>

          <View style={styles.title1Box}>
            <Text style={styles.title2}>We have some addtional suggestions for you.</Text>
            <TouchableOpacity>
              <Text style={styles.title3}>See All</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.contentBox}>
          <FlatList
            data={medi}
            renderItem={renderMedi}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        </View>

      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnFooter}>
          <Image source={require('../stt18_21008301_hoangthimylinh_29/assets/img/anh09.png')} style={styles.imgBtn} />
          <Text style={styles.txtBtn}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnFooter}>
          <Image source={require('../stt18_21008301_hoangthimylinh_29/assets/img/anh10.png')} style={styles.imgBtn} />
          <Text style={styles.txtBtn}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnFooter}>
          <Image source={require('../stt18_21008301_hoangthimylinh_29/assets/img/anh11.png')} style={styles.imgBtn} />
          <Text style={styles.txtBtn}>My Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnFooter}>
          <Image source={require('../stt18_21008301_hoangthimylinh_29/assets/img/anh12.png')} style={styles.imgBtn} />
          <Text style={styles.txtBtn}>Hospital</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnFooter}>
          <Image source={require('../stt18_21008301_hoangthimylinh_29/assets/img/anh13.png')} style={styles.imgBtn} />
          <Text style={styles.txtBtn}>Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnFooter}>
          <Image source={require('../stt18_21008301_hoangthimylinh_29/assets/img/anh14.png')} style={styles.imgBtn} />
          <Text style={styles.txtBtn}>Profile</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  searchBox: {
    width: "85%",
    height: 50,
    flexDirection: "row",
    borderRadius: 30,
    borderColor: "#585d60",
    borderWidth: 1,
    alignItems: "center"
  },
  iconSearch: {
    width: 20,
    height: 20,
    marginHorizontal: 20
  },
  search: {
    width: "80%",
    height: "70%",
    color: "#585d60"
  },
  loc: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    backgroundColor: "#479dcd",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  iconLoc: {
    width: 20,
    height: 20
  },
  content: {
    width: "100%",
    height: "auto",
    flexDirection: "column",
    marginTop: 30
  },
  banerBox: {
    width: "100%",
    height: 150,
  },
  banner: {
    width: "100%",
    height: 150,
    borderRadius: 10
  },
  txtBox: {
    width: "75%",
    height: 70,
    flexDirection: "column",
    marginTop: -70,
    marginLeft: 7
  },
  txt1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  txt2: {
    fontSize: 13,
    color: "#fff",
    marginTop: 10
  },
  contentTitle: {
    width: "100%",
    height: "auto",
    flexDirection: "column",
    marginTop: 30

  },
  title1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#479dcd"
  },
  title1Box: {
    width: "100%",
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title2: {
    fontSize: 14,
    color: "#585d60"
  },
  title3: {
    fontSize: 16,
    fontWeight: "500",
    color: "#479dcd"
  },
  contentBox: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 30

  },
  contentItem: {
    width: "45%",
    height: 330,
    // backgroundColor:"red",
    flexDirection: "column",
    marginBottom: 20,
    marginRight:20
  },
  imgItem: {
    width: "100%",
    height: "45%",
    borderRadius: 10,
    marginBottom: 10
  },
  name: {
    fontSize: 17,
    fontWeight: "600",
    width: "100%",
  },
  priceBox: {
    width: "100%",
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  price: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#479dcd"
  },
  rattingBox: {
    width: 40,
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  start: {
    width: 15,
    height: 15,
  },
  ratting: {
    fontSize: 14,
    color: "#585d60"
  },
  disrec: {
    fontSize: 14,
    color: "#585d60",
    marginTop: 10
  },
  btnRead: {
    fontSize: 16,
    color: "#479dcd",
    fontWeight: "600",
    marginTop: 15
  },
  footer: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  btnFooter: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "15%"
  },
  imgBtn: {
    width: 30,
    height: 30,
    marginBottom: 10
  },
  txtBtn: {
    fontSize: 14,
    fontWeight: "500",
    color: "#585d60"
  }
});
