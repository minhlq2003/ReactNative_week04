import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import react, { useState } from 'react'
import book_png from '../assets/image/Book01.png'
const TikiOK = () => {
    const [value, setValue] = useState(1)
    const [total, setTotal] = useState(141.800)
    const increaseHandler = (prop) => {
      if(prop==='in'){
        setValue(value+1)
        setTotal((prev)=>prev+141.800)
      } else {
        if(value > 0){
          setValue(value-1)
          setTotal((prev)=>prev-141.800)
        }
        else {
          setValue(0)
          setTotal(0)
        }
      }
      
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.productShop}>
          <View style={styles.productInfo}>
            <View style={styles.imgContainer}>
              <Image source={book_png} style={styles.img}/>
              <Text style={styles.text}>Mã giảm giá ưu đãi</Text>
            </View>
            <View>
              <Text style={styles.text}>Nguyên hàm tích phân và ứng dụng</Text>
              <Text style={styles.text}>Cung cấp bởi Tiki Trading</Text>
               <Text style={{color: 'red', marginBottom: 10, fontSize: 18}}>141.800 đ</Text>
              <Text style={{textDecorationLine: 'line-through', color:'grey', marginBottom: 10}}>141.000 đ</Text>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20}}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={{...styles.btn, marginRight:5}} onPress={()=>increaseHandler('de')}><Text>-</Text></TouchableOpacity>
                  <Text>{value}</Text>
                    <TouchableOpacity style={{...styles.btn, marginLeft:5}} onPress={()=>increaseHandler('in')}><Text>+</Text></TouchableOpacity>
                </View>
                <Text style={{color: 'blue', ...styles.text}}>Mua sau</Text>
              </View>
              <Text style={{color: 'blue', ...styles.text}}>Xem tại đây</Text>
            </View>
          </View>
          <View style={styles.promo}>
            <View style={styles.promocodeContainer}>
              
                <View style={styles.yellowBlock}></View>
                <Text style={styles.promoCode}> Mã giảm giá</Text>
            </View>
            <View style={{paddingRight: 50}}>
              <Button title='Áp dụng'/>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: "gray", height: 15, marginTop: 30}}></View>
        <View style={styles.gift}>
          <Text style={styles.text}>Bạn có phiếu quà tặng cũa tiki/Goi it/UrBox?</Text>
          <Text style={{color: 'blue', paddingLeft: 10, ...styles.text}}>Nhập tại đây ?</Text>
        </View>
        <View style={{backgroundColor: "gray", height: 15, marginTop: 20}}></View>

        <View style={styles.price}> 
          <Text style={{fontWeight: '700', fontSize: 18, lineHeight: 21, paddingBottom: 5}}>Tạm tính</Text>
          <Text style={{color: 'red', marginBottom: 5, fontSize: 18, paddingRight: 40}}>{total.toFixed(3)} đ</Text>
        </View>
        <View style={{backgroundColor: "gray", height: 80, marginTop: 20}}></View>

        <View style={styles.total}>
          <View style={{paddingLeft: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: '700', fontSize: 18, lineHeight: 21, paddingBottom: 30, color:'gray'}}>Thành tiền</Text>
          <Text style={{color: 'red', marginBottom: 10, fontSize: 18, paddingRight: 40}}>{total.toFixed(3)} đ</Text>
          </View>
          <Button title='Tiến hành đặt hàng' color='red'/>
        </View>
      </View>
    );
}

export default TikiOK

const styles = StyleSheet.create({
    container:{
      display: 'flex',
      backgroundColor: '#fff',
      justifyContent: 'center',
      flex: 1
    },
    productShop: {
      display: 'flex',
      backgroundColor: '#fff',
    },
    productInfo:{
      flexDirection: 'row',
    },
    imgContainer: {
      paddingHorizontal: 14,
    },
    img:{
      marginBottom: 20,
      height: 150,
        width: 120
    },
    text:{
      marginBottom: 12,
        fontSize: 12,
        fontWeight: "600"
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    btn:{
      width: 20,
      height: 20,
    backgroundColor: "#eeee",
    alignItems: 'center',
    },
    promo:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 20,
      paddingLeft: 20
    },
    promocodeContainer:{
      borderWidth: 1,
      width: 200,
      height: 45,
    },
    promoCode:{
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '700',
      justifyContent: 'center',
      marginTop: 8
    },
    yellowBlock: {
      borderWidth: 10,
      width: 30,
      height: 20,
      borderColor: 'yellow',
      marginLeft: 10,
      marginTop: 12,
      position: 'absolute',},
    gift:{
      backgroundColor: '#fff',
      paddingTop: 20,
      flexDirection: 'row',
      paddingLeft: 20,
    
    },
    price:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
      paddingLeft: 20
    },
    total: {
      marginTop: 10
    }
  });