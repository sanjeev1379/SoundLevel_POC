/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
    PermissionsAndroid,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import RNSoundLevel from 'react-native-sound-level';
const MONITOR_INTERVAL = 250; // in ms

const SoundLevelScreen = () => {
    useEffect(() => {
        if (Platform.OS === 'ios') {
            accessSoundFrameRate();
        } else {
            requestRecordAudioPermission();
        }
    });

    const requestRecordAudioPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                {
                    title: 'Sound Level Audio Permission',
                    message:
                        'Sound Level needs access to your audio ' +
                        'so you can take audio clip.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK'
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Record Audio permission granted');
                accessSoundFrameRate();
            } else {
                console.log('Record Audio permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const accessSoundFrameRate = () => {
        RNSoundLevel.start();

        // you may also specify a monitor interval (default is 250ms)
        RNSoundLevel.start(MONITOR_INTERVAL);

        // or add even more options
        // RNSoundLevel.start({
        //     monitorInterval: MONITOR_INTERVAL,
        //     samplingRate: 16000, // default is 22050
        // })
    };

    useEffect(() => {
        RNSoundLevel.onNewFrame = data => {
            // see "Returned data" section below
            console.log('Sound level info', data);
        };

        return () => {
            // don't forget to stop it
            RNSoundLevel.stop();
        };
    }, []);

    return (
        <View style={styles.highlightBox}>
            <Text style={styles.highlightTitle}>Sound Level Frame Rate</Text>
            <Text style={styles.highlight}>
                A package to dynamically measure sound input level in React
                Native applications. Can be used to help user to adjust
                microphone sensitivity.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    highlightBox: {
        marginHorizontal: 16,
        marginVertical: 24
    },
    highlightTitle: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 12,
        textAlign: 'center'
    },
    highlight: {
        fontSize: 16,
        fontWeight: '400'
    }
});

export default SoundLevelScreen;
