import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel';


const entries = [
    {
        imageURL: "https://free-images.com/lg/8a71/topped_lavendar_flowers_magenta.jpg",
        name: "Product 1",
        description: "Description for Product 1."
    },
    {
        imageURL: "https://free-images.com/md/03a7/mount_merapi_volcano_indonesia.jpg",
        name: "Product 2",
        description: "Description for Product 2."
    },
    {
        imageURL: "https://free-images.com/md/1855/new_york_skyline_usa.jpg",
        name: "Product 3",
        description: "Description for Product 3."
    }
];

export default function App() {
    const carouselRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const _renderItem = ({ item, index }) => {
        return (
            <ImageBackground
                style={styles.slide}
                source={{ uri: item?.imageURL }}
                resizeMode="cover"
                imageStyle={{ borderRadius: 6 }}
            >
            </ImageBackground>
        );
    };

    const pagination = (
        <Pagination
            dotsLength={entries.length}
            activeDotIndex={activeSlide}
            containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', }}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
            }}
            inactiveDotStyle={{
                // Define styles for inactive dots here
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
        />
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.carousel1}>
                <Text>Carousel Default</Text>
                <Carousel
                    layout={'default'}
                    ref={carouselRef}
                    data={entries}
                    renderItem={_renderItem}
                    sliderWidth={380}
                    itemWidth={300}

                />
            </View>

            <View style={styles.carousel2}>
                <Text>Carousel Stack</Text>
                <Carousel
                    layout={'stack'}
                    ref={carouselRef}
                    data={entries}
                    renderItem={_renderItem}
                    sliderWidth={380}
                    itemWidth={300}
                />
            </View>

            <View style={styles.carousel2}>
                <Text>Carousel Tinder</Text>
                <Carousel
                    layout={'tinder'}
                    ref={carouselRef}
                    data={entries}
                    renderItem={_renderItem}
                    sliderWidth={380}
                    itemWidth={300}
                    onSnapToItem={(index) => setActiveSlide(index)}
                />
                {pagination}
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60
    },
    carousel1: {
        alignItems: 'center'
    },
    slide: {
        width: "100%",
        height: 200,
        backgroundColor: 'green',
        borderRadius: 100,
        marginTop: 5
    },
    title: {
        color: 'white',
        textAlign: 'center',
        padding: 10
    },
    carousel2: {
        marginTop: 30,
        alignItems: 'center'
    }
})