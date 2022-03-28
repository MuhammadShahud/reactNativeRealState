import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  BLUEFONTCOLOR,
  GRAYCOLOR,
  PRIMARYCOLOR,
  PURPLECOLOR,
  SECONDARYCOLOR,
} from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARYCOLOR,
  },
  innerView: {
    width: wp('90%'),
    alignSelf: 'center',
    alignItems: 'center',
  },
  large: {
    fontSize: wp('6%'),
    fontFamily: 'Roboto-Bold',
    color: '#fff',
    textAlign: 'center',
  },
  medium: {
    fontSize: wp('4%'),
    fontFamily: 'Roboto-Regular',
    color: '#fff',
    textAlign: 'center',
  },
  imageStyle: {
    width: wp('85%'),
    height: hp('45%'),
  },
  logoStyle: {
    width: wp('35%'),
    height: hp('20%'),
  },
  forgotWidth: {
    width: '90%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inputField: {
    width: wp('80%'),
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 5,
    paddingLeft: 15,
  },
  headline: {
    fontSize: 20,
    color: 'white',
    fontWeight: '200',
  },
  BackHeaderBG: {
    width: wp('88%'),
    alignSelf: 'center',
    justifyContent: 'space-between',
    height: hp('9%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceHeight: {
    height: hp('2%'),
  },
  small: {
    fontSize: wp('3.5%'),
    fontFamily: 'Roboto-Regular',
    color: '#fff',
    textAlign: 'left',
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  subscriptionView: {
    width: wp('90%'),
    height: hp('77%'),
    alignSelf: 'center',
    paddingVertical: hp('2%'),
    backgroundColor: GRAYCOLOR,
    borderRadius: wp('2%'),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  cloudPersonImage: {
    width: wp('35%'),
    height: wp('30%'),
    position: 'absolute',
    right: wp('5%'),
    top: hp('6%'),
    zIndex: 1,
  },
  subscriptionCardStyle: {
    width: wp('78%'),
    height: wp('16%'),
    backgroundColor: '#fff',
    borderRadius: wp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
  },
  smallBtn: {
    backgroundColor: PURPLECOLOR,
    width: wp('16%'),
    alignItems: 'center',
    height: hp('5%'),
    justifyContent: 'center',
    borderRadius: wp('2%'),
    paddingHorizontal: wp('2%'),
  },
  subscriptionFooter: {
    width: wp('85%'),
    height: hp('8%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  btnBg: {
    width: '100%',
    backgroundColor: SECONDARYCOLOR,
    height: hp('6.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('2%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  btnBgSecondary: {
    width: '100%',
    backgroundColor: SECONDARYCOLOR,
    height: hp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('10%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  upperHomeDatesStyle: {
    width: wp('12%'),
    height: hp('8%'),
    marginHorizontal: wp('2%'),
    borderRadius: wp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeFooterViewStyle: {
    width: wp('100%'),
    minHeight: hp('80%'),
    backgroundColor: '#fff',
    borderTopStartRadius: wp('10%'),
    paddingVertical: hp('3%'),
    borderTopEndRadius: wp('10%'),
    flex: 1,
  },
  boxStyle: {
    width: wp('41%'),
    height: hp('17%'),
    backgroundColor: PURPLECOLOR,
    borderRadius: wp('5%'),
    marginHorizontal: wp('2%'),
  },
  questionBoxStyle: {
    width: wp('43%'),
    height: hp('17%'),
    backgroundColor: GRAYCOLOR,
    borderRadius: wp('5%'),
    margin: wp('2%'),
  },
  homeImageStyle: {
    width: wp('90%'),
    height: hp('15%'),
    backgroundColor: PRIMARYCOLOR,
    alignSelf: 'center',
    borderRadius: wp('2%'),
    justifyContent: 'center',
  },
  tabImageStyle: {width: wp(5.5), height: wp(5.5), marginTop: hp(1)},
  questionListView: {
    width: wp('90%'),
    height: hp('15%'),
    backgroundColor: '#EDEFFE',
    alignSelf: 'center',
    marginVertical: hp('1%'),
    borderRadius: wp('5%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
  },
  setBox: {
    width: wp('29%'),
    height: hp('12%'),
    backgroundColor: PURPLECOLOR,
    borderRadius: wp('4%'),
    margin: wp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp('1%'),
  },
  setIconBox: {
    width: wp('20%'),
    height: hp('4.5%'),
    backgroundColor: GRAYCOLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('1%'),
  },
  settingBoxIcon: {
    width: wp('90%'),
    paddingVertical: hp('3%'),
    backgroundColor: GRAYCOLOR,
    alignSelf: 'center',
    borderRadius: wp('5%'),
  },
  SingleListSettingView: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  boxActivity: {
    width: wp('25%'),
    height: hp('17%'),
    backgroundColor: '#DBF9F1',
    borderRadius: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  activityHead: {
    width: wp('90%'),
    alignSelf: 'center',
    backgroundColor: PRIMARYCOLOR,
    borderTopStartRadius: wp('2%'),
    borderTopEndRadius: wp('2%'),
    height: hp('8%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: wp('5%'),
  },
  activityBelow: {
    width: wp('90%'),
    alignSelf: 'center',
    backgroundColor: PRIMARYCOLOR,
    borderEndStartRadius: wp('2%'),
    borderEndEndRadius: wp('2%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('2%'),
  },
  FlashCardsBtn: {
    width: '65%',
    backgroundColor: PRIMARYCOLOR,
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('2%'),
  },
  content: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: wp('80%'),
    height: hp('60%'),
    // backgroundColor: '#FE474C',
    borderRadius: wp('5%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  card1: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '-2.5deg'}],
  },
  card2: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '-2.5deg'}],
  },
  cardsProgressBar: {
    width: wp('85%'),
    alignSelf: 'center',
    height: hp('.7%'),
    borderRadius: wp('50%'),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: wp('50%'),
    backgroundColor: '#ffff',
  },
  cardsProgressPercents: {
    width: '5%',
    alignSelf: 'center',
    height: hp('.7%'),
    backgroundColor: PURPLECOLOR,
  },

  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: wp('75%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  buttonCards: {
    width: wp('15%'),
    height: wp('15%'),
    backgroundColor: '#fff',
    borderRadius: wp('15%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardFooterIcons: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    bottom: hp(3),
  },
  innerCardsSwipeContainer: {
    width: '98%',
    height: '98%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: wp('5%'),
  },
  cardOuterView: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('5%'),
    backgroundColor: '#EDEFFE',
  },
});