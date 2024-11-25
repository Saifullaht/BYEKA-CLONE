import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// Screen height for responsive styling
const Screen_height = Dimensions.get("screen").height;

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu-outline" size={30} color="green" />
        <Text style={styles.headerText}>BYKEA</Text>
        <MaterialCommunityIcons name="phone-outgoing" size={24} color="green" />
      </View>

      <View style={styles.bannerImg}>
        <ImageBackground
          source={{ uri: "https://i.dawn.com/primary/2022/08/2920550160565e9.jpg" }}
          style={styles.bannerImg1}
          imageStyle={styles.bannerImageStyle}  // Apply rounded corners to the image itself
        />
      </View>
      
      <View style={styles.viewinfobar}>
        <MaterialCommunityIcons name="message-badge-outline" size={25} color="gray" />
        <MaterialIcons name="attach-money" size={24} color="gray" />
      </View>
      
      <View style={styles.boxes}>
        <View style={styles.boxes3}>
          <Card title={"Carpol"} icon={"https://img.freepik.com/premium-photo/cartoon-yellow-car-bank-blue-background-3d-rendering_778569-410.jpg"} />
          <Card title={"Ride"} icon={"https://img.freepik.com/premium-photo/green-car-concept-sustainable-transport-ai-generated_79087-6355.jpg"} />
        </View>
        <View style={styles.boxes3}>
          <Card title={"Delivery"} icon={"https://img.freepik.com/premium-photo/flying-box-courier-package-cardboard-paper-box-with-wings-flying-package-parcel-delivery-concept-courier-work-logistics-shipping-fast-delivery-tracking-cargo-shipment_99272-10540.jpg"} />
          <Card title={"Mobiles"} icon={"https://img.freepik.com/premium-photo/online-shopping-store-smartphone-with-shopping-basket-bags-purple-background-3d-rendering_265427-1700.jpg"} />
        </View>
        <View style={styles.boxes3}>
          <Card title={"Shops"} icon={"https://t4.ftcdn.net/jpg/05/07/13/99/360_F_507139941_3oCkF1hmnkAsKJtiED2qzkfnC4ak9CQS.jpg"} />
          <Card title={"Rentals"} icon={"https://media.istockphoto.com/id/1404553910/photo/3d-cartoon-alarm-clock-and-coins-time-is-money-concept-tax-time-reminder-business-investments.jpg?s=612x612&w=0&k=20&c=79vG19JGU-QNaJ7FUsALtP81xoc7QzJTg3aKkKIJOmI="} />
        </View>
      </View>
    </View>
  );
}

const Card = ({ icon, title }: { icon: string, title: string }) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{ uri: icon }}
        style={styles.cardImage}
        imageStyle={styles.cardImageStyle}  // Apply radius and background effect to image
      >
        <Text style={styles.cardTitle}>{title}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 22,
    letterSpacing: 3,
    fontWeight: '800',
    color: "green"
  },
  bannerImg: {
    height: Screen_height / 4,
    backgroundColor: "#E8EAEC",
    paddingHorizontal: 20,
    paddingTop: 10,  },
  bannerImg1: {
    height: "90%",
    borderRadius: 20,
  },
  bannerImageStyle: {
    borderRadius: 20,
  },
  viewinfobar: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: -18,
    marginHorizontal: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  boxes: {
    flex: 1,
    margin: 10,  // Reduced the margin to reduce the space between boxes
    gap: 1,  // Reduced the gap between each row of boxes
  },
  boxes3: {
    flex: 1,
    flexDirection: "row",
    gap: 1,  // Reduced gap between individual boxes
  },
  card: {
    flex: 1,
    padding: 10,
    borderRadius: 12,
    overflow: "hidden",  // To ensure that the image doesn't spill outside the border radius
  },
  cardImage: {
    flex: 1,
    justifyContent: "center",  // Center the content vertically and horizontally
    alignItems: "center",
    padding: 10,
  },
  cardImageStyle: {
    borderRadius: 12,
    resizeMode: "cover",  // Ensure image stretches to cover the card
  },
  cardTitle: {
    position: 'absolute',
    top: 1,  // Moved the text to the top-right corner
    right: 5,  // Align it to the right
    fontSize: 14,  // Decreased font size
    fontWeight: 'bold',
    color: 'black',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Darken the area behind the text for readability
    padding: 5,
    borderRadius: 5,
  },
});
