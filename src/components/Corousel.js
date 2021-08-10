import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'

import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width,height } = Dimensions.get("screen")

import AuthBtn from './AuthBtn';

export default class Corousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: [{ id: '1', description: 'Explore the largest collection of trail maps anywhere curated by millions of outdoor enthusiasts like you', title: 'Discover 100,000+ trails around the world', image: 'https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg' },
            { id: '12', description: 'Find your perfect hike,bike,ride, or run.Filter by length, rating, and difficulty.Easily find dog and kid-friendly trails', title: "Find a trail that's perfect for you", image: "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
            { id: '3', description: "Browse hand-curated trail maps plus reviews,photos and activities from the AllTrails community", title: 'Hit the trail with confidence', image: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }],
            activeSlide: 0
        }
    }


    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.snapContainer}>
                <Image style={styles.snapImage} source={{ uri: item.image }} />
                <Text style={styles.snapTitle}>{item.title}</Text>
                <Text style={styles.snapDescription}>{item.description}</Text>
            </View>
        );
    }

    get pagination() {
        // const { entries, activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={3}
                activeDotIndex={this.state.activeSlide}
                containerStyle={{ position: "absolute", bottom: 0, margin: 175 }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: 'green',
                    // marginHorizontal: 8,

                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                    // backgroundColor: 'rgba(255, 255, 255, 0.92)'
                    backgroundColor: "grey"
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        )
    }


    render() {
        return (
            <View>
                <Text style={[styles.skip,{alignItems:"center"}]}>Skip</Text>
                <View style={{ alignSelf: "center", position: "absolute", marginTop: -6,right:175 }}>
                    <Image style={styles.logo} source={require('../assets/images/adventure.jpg')} />
                </View>

                <Carousel
                    layout={'default'}
                    // pagingEnabled
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    sliderWidth={width}
                    itemWidth={415}
                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
                />
                {this.pagination}
                <View style={styles.btnStyle}>
                    <AuthBtn style={styles.login} laebelStyle={{ color: "green" }} mode="outlined" >Log in</AuthBtn>
                    <AuthBtn style={styles.singup} mode="contained">Sign up</AuthBtn>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    snapImage: {
        height: height/1.8,
        width: 600
    },
    snapTitle: {
        fontFamily: 'RobotoCondensed-BoldItalic',
        fontSize: 26,
        marginTop: 20
    },
    snapContainer: {
        padding: 20,
        alignItems: "center",
        width: width
    },
    snapDescription: {
        marginTop: 5,
        fontSize: 16,
        color: '#888',
        justifyContent:"flex-start",
        textAlign:"center"
    },
    btnStyle: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center"
    },
    login: {
        width: "45%",
        color: "green",
        borderColor: "green",
        borderWidth: 2,
        paddingVertical: 6
        // elevation:0.3
    },
    singup: {
        width: '45%',
        color: "white",
        backgroundColor: "green",
        paddingVertical: 7
    },
    logo: {
        height: 50,
        width: 50
    },
    skip: {
        fontWeight: 'bold',
        color: "green",
        marginTop: 6,
        marginLeft: 5,
        paddingHorizontal: 4,
        fontSize: 16
    }
})
