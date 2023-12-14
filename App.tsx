/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
    NativeModules,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    useColorScheme
} from 'react-native';
import codePush from 'react-native-code-push';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import ReplyPostScreen from './src/ReplyPostScreen';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    };

    const forbidFunction = async () => {
        try {
            const result = await NativeModules.PreventScreenshotModule.forbid();
            console.log(result);
        } catch (e) {
            console.log('ERROR Occur in forbid ScreenShot => ', e);
        }
    };

    const allowFunction = async () => {
        try {
            const result = await NativeModules.PreventScreenshotModule.allow();
            console.log(result);
        } catch (e) {
            console.log('ERROR Occur in allow ScreenShot => ', e);
        }
    };

    useEffect(() => {
        if (Platform.OS == 'android') {
            forbidFunction();
        }
    });

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <ReplyPostScreen />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600'
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400'
    }
});

const codePushOptions = {
    checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
    installMode: codePush.InstallMode.ON_NEXT_RESUME,
    rollbackRetryOptions: {
        delayInHours: 0,
        maxRetryAttempts: 5
    }
};
export default codePush(codePushOptions)(App);
