import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ReplyPostScreen = () => {
    useEffect(() => {
        // Write a program to sort the given array
        // Find the Kth largest and Kth smallest number in an array
        let arr = [4, 3, 6, 1, 4, 8, 9];
        arr.sort((first, second) => first - second);
        console.log('Sorted Arr Using Sort Method : ', arr);
    }, []);

    useEffect(() => {
        // Write a program to sort the given array
        // Find the Kth largest and Kth smallest number in an array
        let arr = [4, 3, 6, 1, 4, 8, 9];
        let index;
        for (index = 0; index < arr.length - 1; index++) {
            if (arr[index] > arr[index + 1]) {
                let temp = arr[index + 1];
                arr[index + 1] = arr[index];
                arr[index] = temp;

                index = -1;
            }
        }
        console.log('Sorted Arr using For loop : ', arr);
    }, []);

    useEffect(() => {
        // Find the occurrence of an integer in the array
        let arr = [4, 3, 6, 1, 4, 8, 9];
        let countOccurs: any = {};
        arr.forEach(item => {
            if (!countOccurs.hasOwnProperty(item)) {
                Object.assign(countOccurs, { [item]: 1 });
            } else {
                countOccurs[item] = countOccurs[item] + 1;
            }
        });
        console.log('count Occurs : ', countOccurs);
    }, []);

    useEffect(() => {
        // Move all the negative elements to one side of the array
        let arr = [4, -3, -6, 1, -4, -8, 9, 0, 1];
        let positive = [];
        let negative = [];
        let result: any = [];

        positive = arr.filter(item => item >= 0);
        negative = arr.filter(item => item < 0);
        result = positive.concat(negative);

        console.log('negative elements : ', result);
    }, []);

    useEffect(() => {
        // Write a program to cyclically rotate an array by one
        let arr = [4, 3, 6, 1, 4, 8, 9];
        let result: any = [];
        for (let index = arr.length - 1; index > 0; index--) {
            result.push(arr[index]);
        }
        console.log('cyclically rotate : ', result);
    }, []);

    useEffect(() => {
        // Find the missing integer
        let arr = [4, 3, 6, 1, 4, 8, 9];
        let missingInteger = 1;
        let missingIndex = arr.findIndex(item => item === missingInteger);
        console.log('Missing Integer: ', missingIndex);
    }, []);

    useEffect(() => {
        // Find duplicates in an array
        let arr = [4, 3, 6, 3, 1, 4, 8, 9];
        let duplicate: any = [];
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length - 1; j++) {
                if (arr[i] === arr[j]) {
                    duplicate.push(arr[i]);
                }
            }
        }

        duplicate = arr.filter((item, index) => arr.indexOf(item) !== index);
        console.log('Duplicate : ', duplicate);
    }, []);

    useEffect(() => {
        // Write a function that returns a new array containing only the unique elements from an input array.
        let arr = [4, 3, 6, 3, 1, 4, 8, 9];
        let duplicate: any = [];
        let unique: any = [];
        duplicate = arr.filter((item, index) => arr.indexOf(item) !== index);
        arr.forEach((item, index) =>
            arr.indexOf(item) === index ? unique.push(item) : null
        );

        let result: any = [];
        unique.forEach((item: any) =>
            !duplicate.includes(item) ? result.push(item) : null
        );
        console.log('Unique Element : ', result);
    }, []);

    useEffect(() => {
        // Implement a function that returns the average value of numbers in an array.
        let arr = [4, 3, 6, 3, 1, 4, 8, 9];
        let result = 0;
        let sum = arr.reduce((item, acc) => item + acc, 0);
        result = sum / arr.length;
        console.log('Average Value : ', result);
    }, []);

    useEffect(() => {
        // Remove Duplicate Array of Object.
        let arr = [
            { id: 101, name: 'Jhon' },
            { id: 104, name: 'Sam' },
            { id: 101, name: 'Javascript' },
            { id: 102, name: 'Adam' },
            { id: 101, name: 'Java' }
        ];
        let result: any = [];
        arr.forEach((input, index) => {
            let existing = arr.find(
                () => index === arr.findIndex(item => item.id === input.id)
            );
            if (existing) {
                result.push(input);
            }
        });

        console.log('result', result);
    }, []);

    useEffect(() => {
        // Implement a function that merges two arrays into a single array, alternating elements from each array.
        let arr1 = [2, 6, 3, 7, 9];
        let arr2 = [5, 8, 1, 4, 7];
        let result: any = [];

        new Array(arr1.concat(arr2).length).fill(0).map((_, index) => {
            index < arr1.length && result.push(arr1[index]);
            index < arr2.length && result.push(arr2[index]);
        });

        console.log('Single Array : ', result);
    }, []);

    useEffect(() => {
        // FizzBuzz Chalange.
        let result: any = [];

        const checkFizzLogic = (buzz: any) => {
            return buzz ? result.push('FizzBuzz') : result.push('Fizz');
        };

        const checkBuzzLogic = (buzz: any, index: any) => {
            return buzz ? result.push('Buzz') : result.push(index);
        };

        new Array(100).fill(0).forEach((_, index) => {
            let fizz = index % 3 === 0;
            let buzz = index % 5 === 0;
            fizz ? checkFizzLogic(buzz) : checkBuzzLogic(buzz, index);
        });
        console.log('FizzBuzz Chalange : ', result);
    }, []);

    return (
        <View style={styles.postContainer}>
            <View style={styles.closeBox}>
                <MaterialIcons name="close" size={20} color="#900" />
            </View>
            <View style={styles.topBox}>
                <View style={styles.postHeader}>
                    <View style={styles.imageBox}>
                        <Image
                            style={styles.headerLogo}
                            source={{
                                uri: 'https://static.vecteezy.com/system/resources/thumbnails/017/784/737/small/men-work-activity-3d-illustration-transparent-background-png.png'
                            }}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.bottomBox}>
                <View style={styles.postBody}>
                    <Text style={[styles.head]}>Section 8</Text>
                    <View style={[styles.bodyBox, styles.rowSection]}>
                        <Text style={[styles.subHeading, styles.titleColor]}>
                            Reply to an online post
                        </Text>
                        <AntDesignIcons
                            name="sound"
                            size={20}
                            color="#900"
                            style={[styles.subHeading]}
                        />
                    </View>
                    <View style={[styles.rowSection, styles.flexStart]}>
                        <MaterialIcons
                            name="watch-later"
                            size={14}
                            color="#900"
                        />
                        <Text style={[styles.heading, styles.titleColor]}>
                            3 minutes
                        </Text>
                    </View>
                    <View style={[styles.rowSection, styles.flexStart]}>
                        <MaterialIcons name="keyboard" size={14} color="#900" />
                        <Text style={[styles.heading, styles.titleColor]}>
                            Write at atleast 40 words
                        </Text>
                    </View>
                    <View style={styles.bodyBox}>
                        <Text style={styles.body}>
                            Read a question posted on a online website. Write a
                            response with advice.
                        </Text>
                        <Text style={[styles.body, styles.bodyBox]}>
                            You will have 3 minutes to read and respond.
                        </Text>
                        <Text style={styles.body}>Write atleast 40 words.</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: '#f0f6ff'
    },
    topBox: {
        left: 0,
        top: 80,
        zIndex: 999
    },
    postHeader: {
        paddingHorizontal: 16,
        paddingVertical: 24
    },
    imageBox: {
        paddingTop: 20,
        marginTop: -140
    },
    headerLogo: {
        width: 160,
        height: 160
    },
    bottomBox: {
        flex: 1
    },
    postBody: {
        paddingHorizontal: 16,
        paddingVertical: 24,
        backgroundColor: '#fff',
        borderTopRightRadius: 80, // move inner item down
        overflow: 'hidden',
        paddingTop: 80
    },
    rowSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2
    },
    flexStart: {
        justifyContent: 'flex-start'
    },
    titleColor: {
        color: '#313132'
    },
    head: {
        fontSize: 14,
        fontWeight: '600',
        color: '#a10780'
    },
    heading: {
        fontSize: 12,
        fontWeight: '600',
        marginBottom: 2,
        marginLeft: 8
    },
    subHeading: {
        fontSize: 28,
        fontWeight: '400',
        lineHeight: 40
    },
    bodyBox: {
        marginVertical: 6
    },
    body: {
        fontSize: 15,
        color: '#787d7f',
        fontWeight: '400'
    },
    closeBox: {
        position: 'absolute',
        top: 12,
        right: 12
    }
});

export default ReplyPostScreen;
