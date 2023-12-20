/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
    Button,
    NativeModules,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    useColorScheme
} from 'react-native';
import codePush from 'react-native-code-push';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import ReplyPostScreen from './src/ReplyPostScreen';
import RTNCalculator from 'rtn-calculator/js/NativeCalculator';
// import RTNCenteredText from 'rtn-centered-text/js/RTNCenteredTextNativeComponent';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const [sumResult, setSumResult] = useState<number | null>(null);
    const [mulResult, setMulResult] = useState<number | null>(null);

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
                <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                    {/* <RTNCenteredText
                        text="Fabric Randerer Text Componant!"
                        style={{width: '100%', height: 30}}
                    /> */}
                    <Text style={{ marginTop: 20 }}>
                        Sum: 3+7={sumResult ?? '??'}
                    </Text>
                    <Text style={{ marginTop: 20 }}>
                        Multipy: 3*7={mulResult ?? '??'}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 20
                        }}>
                        <Button
                            title="Sum"
                            onPress={async () => {
                                const value = await RTNCalculator?.add(3, 7);
                                setSumResult(value ?? null);
                            }}
                        />
                        <Button
                            title="Multipy"
                            onPress={async () => {
                                const value = await RTNCalculator?.multipy(
                                    3,
                                    7
                                );
                                setMulResult(value ?? null);
                            }}
                        />
                    </View>
                </View>
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
