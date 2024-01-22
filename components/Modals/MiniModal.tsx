import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Iconicons from '@expo/vector-icons/Ionicons';

interface MiniModalProps {
    backgroundColor?: string;
    textColor?: string;
    header?: string;
    isOpen: boolean;
    modalContent: any;
    handleToggleModal: () => void;
}

export const MiniModal = ({ backgroundColor = '#CCCCCC', textColor = 'black', header, isOpen, handleToggleModal, modalContent }: MiniModalProps) => {
    if (!isOpen) {
        return null;
    }

    return (
        <View style={[styles.container, { backgroundColor: backgroundColor }]}>
            <View style={styles.headerContainer}>
                <View style={styles.headerTextContainer}>
                    {header && <Text style={[styles.header, { color: textColor }]}>{header}</Text>}
                </View>
                <TouchableOpacity style={styles.closeBtn} onPress={handleToggleModal}>
                    <Iconicons color={textColor} size={23} name="close-circle-outline" />
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                {modalContent}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        width: '80%',
        height: 175,
        top: '60%',
        left: '10%',
        alignItems: 'center',
        borderRadius: 8,
        zIndex: 101
    },
    header: {
        color: "white",
        alignSelf: "center",
        marginLeft: 32,
        marginTop: 8,
        fontSize: 20
    },
    closeBtn: {
        paddingTop: 8,
        paddingRight: 8,
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTextContainer: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
});

export default MiniModal;

