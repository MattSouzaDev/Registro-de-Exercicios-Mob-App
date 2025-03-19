import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HistoryScreen() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const historyData = await AsyncStorage.getItem("workoutHistory");
      if (historyData) {
        setHistory(JSON.parse(historyData));
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar o histórico.");
    }
  };

  const clearHistory = async () => {
    await AsyncStorage.removeItem("workoutHistory");
    setHistory([]);
    Alert.alert("Sucesso", "Histórico apagado!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Treinos</Text>

      {history.length === 0 ? (
        <Text style={styles.noData}>Nenhum treino salvo ainda.</Text>
      ) : (
        <FlatList
          data={history}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => (
            <View style={styles.workoutItem}>
              <Text style={styles.workoutDate}>
                {new Date(item.date).toLocaleString()}
              </Text>
              {item.exercises.map((exercise, index) => (
                <Text key={index} style={styles.exerciseText}>
                  - {exercise.name}: {exercise.duration} min
                </Text>
              ))}
            </View>
          )}
        />
      )}

      <Button title="Limpar Histórico" onPress={clearHistory} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  noData: {
    textAlign: "center",
    fontSize: 16,
    color: "gray",
  },
  workoutItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  workoutDate: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  exerciseText: {
    fontSize: 14,
  },
});
