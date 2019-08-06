import React from 'react'
import { StyleSheet, View, } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Ionicons'

// Mainly used this component for separation of concerns.  Displays picnic tables, food icons on the different maps
// Need to refactor to stateless

class FoodIcons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    // Icon shared amongst all of the food like places
    const foodIcon =
      <Icon
        name="food"
        size={28}
        color="#ffb300"
      />;

    const picnicBasketIcon =
      <Icon2
        name="shopping-basket"
        size={22}
        color="#ffb300"
      />;

    const tipsyIcon =
      <Icon3
        name="md-wine"
        size={22}
        color="#ffb300"
      />

    const { mountainView, handleGetOnePlace } = this.props;

    return (
      <View style={{zIndex: 1000}}>
        { mountainView === 1 ?
        <Button
          icon={picnicBasketIcon}
          style={{top: -318, left: 200}}
          buttonStyle={styles.btn}
          onPress={() => handleGetOnePlace(5)}
          type="clear"
          TouchableOpacity={0.2}
        />
        : mountainView === 2 || mountainView === 3 ?
        <Button
          icon={foodIcon}
          style={{top: -328, left: 2}}
          buttonStyle={styles.btn}
          onPress={() => handleGetOnePlace(4)}
          type="clear"
          TouchableOpacity={0.2}
        />
        : mountainView === 4 || mountainView === 5 || mountainView === 6 || mountainView === 7 ?
        <View>
        <Button
          icon={foodIcon}
          style={{top: -100, left: 80}}
          buttonStyle={styles.btn}
          onPress={() => handleGetOnePlace(7)}
          type="clear"
          TouchableOpacity={0.2}
        />
        <Button
          icon={foodIcon}
          style={{top: -288, left: 188}}
          buttonStyle={styles.btn}
          onPress={() => handleGetOnePlace(1)}
          type="clear"
          TouchableOpacity={0.2}
        />
        </View>
        : mountainView === 8 || mountainView === 9 || mountainView === 10 || mountainView === 13 ?
        <View>
        <Button
          icon={picnicBasketIcon}
          style={{top: -334, left: 74}}
          buttonStyle={styles.btn}
          onPress={() => handleGetOnePlace(6)}
          type="clear"
          TouchableOpacity={0.2}
        />
        <Button
          icon={foodIcon}
          style={{top: -70, left: 70}}
          buttonStyle={styles.btn}
          onPress={() => handleGetOnePlace(1)}
          type="clear"
          TouchableOpacity={0.2}
        />
        </View>
        :
        <View>
        <Button
          icon={tipsyIcon}
          style={{top: -280, left: 120}}
          buttonStyle={styles.btn}
          onPress={() => handleGetOnePlace(9)}
          type="clear"
          TouchableOpacity={0.2}
        />
        <Button
          icon={picnicBasketIcon}
          style={{top: -120, left: 260}}
          buttonStyle={styles.btn}
          onPress={() => handleGetOnePlace(8)}
          type="clear"
          TouchableOpacity={0.2}
        />
        <Button
          icon={foodIcon}
          style={{top: -80, left: 280}}
          buttonStyle={styles.btn}
          onPress={() => handleGetOnePlace(2)}
          type="clear"
          TouchableOpacity={0.2}
        />
        <Button
          icon={foodIcon}
          style={{top: -334, left: 280}}
          buttonStyle={styles.btn}
          onPress={() => handleGetOnePlace(3)}
          type="clear"
          TouchableOpacity={0.2}
        />
        </View>
        }
      </View>
    )

  }
}

const styles = StyleSheet.create({
  // Shared Style amongst all buttons, unique style for positioning on the image found in
  // Style portion of each button.  Below style used in buttonStyle
  btn: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 50,
    zIndex: 1000,
  },
})

export default FoodIcons