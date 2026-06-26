import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import React, { useState } from 'react';

const ModalDialogBox = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.showDialogButton}>Show Dialog</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType={'fade'}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalDialgView}>
            <Text style={styles.modalTitle}>Modal Title</Text>
            <Text style={styles.modalDescription}>
              Modal Description goes here which can be a longer text to show the
              message
            </Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCloseButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalDialogBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showDialogButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#0e8ce7',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalDialgView: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalDescription: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
  },
  modalCloseButton: {
    backgroundColor: '#084fa6',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
    color: '#ffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
