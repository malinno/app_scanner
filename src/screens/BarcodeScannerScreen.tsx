import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  DeviceEventEmitter,
  Platform,
} from 'react-native';
// @ts-ignore vì thư viện không có file .d.ts
import DataWedgeIntents from 'react-native-datawedge-intents';

export default function BarcodeScannerScreen() {
  const [barcode, setBarcode] = useState('');

  useEffect(() => {
    const subscription = DeviceEventEmitter.addListener(
      'datawedge_broadcast_intent',
      (intent) => {
        console.log('📥 Đã nhận intent:', intent);
        const data =
          intent['com.symbol.datawedge.data_string'] ||
          intent['com.motorolasolutions.datawedge.data_string'] ||
          intent['data_string'];
        if (data) {
          const cleaned = data.trim();
          setBarcode(cleaned);
          console.log('✅ Mã quét:', cleaned);
        } else {
          console.log('⚠️ Không tìm thấy mã quét trong intent.');
        }
      }
    );

    if (Platform.OS === 'android') {
      DataWedgeIntents.registerBroadcastReceiver({
        filterActions: ['com.zebra.reactnative.ACTION'],
        filterCategories: ['android.intent.category.DEFAULT'],
      });
    }

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📦 Kết quả quét:</Text>
      <Text style={[styles.barcode, { color: barcode ? 'green' : 'gray' }]}> 
        {barcode || 'Chưa có mã'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  barcode: {
    fontSize: 28,
    fontWeight: '600',
  },
}); 