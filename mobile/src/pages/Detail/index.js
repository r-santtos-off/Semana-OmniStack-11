import React from 'react';
import logoImg from '../../assets/logo.png';
import styles from './style';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

const Detail = () => {

  {/* FUNTION BACK */}
  const navigation = useNavigation();
  const message = 'Olá Mundo kkkk';
  function navigationBack() {
    navigation.goBack();
  }

  {/* FUNCTION WHATSAPP */}
  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=5599958258585?text${message}`);
  }

  {/* FUNCTION E-MAIL */}
  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso: Cadelinha atropelada',
      recipients: ['email.rsanttos@gmail.com'],
      body: message, 
    })
  }

  {/* MONTAGEM DA TELA */}
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigationBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </View>

      {/* Incidents */}
      <View style={styles.incidents}> 
        <Text style={styles.incidentProperty}>ONG:</Text>
        <Text style={styles.incidentValue}>APAD</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>R$ 120,00</Text>
      </View>

      {/* Contact Box */}
      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        {/* BTNS WHATSAPP E E-MAIL*/}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Detail;