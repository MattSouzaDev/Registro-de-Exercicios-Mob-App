import { Text, View, StyleSheet, TextInput, Button, FlatList, Alert } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const [exercises, setExercises] = useState<{ id: string; name: string; duration: string }[]>([])
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");

  const addExercise = () => {
    if (name.trim() && duration.trim()) {
      const newExercise = { id: Date.now().toString(), name, duration };
      setExercises([...exercises, newExercise]);
      setName("");
      setDuration("");
    } else {
      Alert.alert("Erro", "Preencha todos os campos!");
    }
  };

  const completeWorkout = async () => {
    if (exercises.length === 0) {
      Alert.alert(
        "Aviso",
        "Adicione pelo menos um exercício antes de finalizar."
      );
      return;
    }

    const now = new Date();
    const dateKey = now.toISOString();
    const newWorkout = { date: dateKey, exercises };

    try {
      const historyData = await AsyncStorage.getItem("workoutHistory");
      const history = historyData ? JSON.parse(historyData) : [];
      history.push(newWorkout);
      await AsyncStorage.setItem("workoutHistory", JSON.stringify(history));

      setExercises([]);
      Alert.alert("Sucesso", "Treino finalizado e salvo no histórico!");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar o treino.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Exercícios</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do exercício (Ex: Corrida)"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Duração (Ex: 30 minutos)"
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
      />
      <Button title="Adicionar Exercício" onPress={addExercise} />

      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.exerciseItem}>
            <Text style={styles.exerciseText}>
              {item.name} - {item.duration} min
            </Text>
            <Button
              title="Finalizar Treino"
              onPress={completeWorkout}
              color="green"
            />
          </View>
        )
        }
      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  baseText: {
    color: "red"
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  exerciseItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  exerciseText: {
    fontSize: 16,
    marginBottom: 20
  }
});