import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Colors from './../../constants/Colors'

const calculatorTypes = [
  { id: 1, name: 'Livestock Drinking Water Calculator' },
  { id: 2, name: 'Irrigation Water Calculator' },
  { id: 3, name: 'Household Water Use Calculator' },
  { id: 4, name: 'Garden & Landscaping Water Use Calculator' },
  { id: 5, name: 'Dairy Shed Water Use Calculator' },
  { id: 6, name: 'Other Agricultural Water Use Calculator' },
  { id: 7, name: 'Aquaculture Water Use Calculator' },
];

const livestockTypes = ['Cows', 'Sheep', 'Goats', 'Chickens'];
const cropTypes = ['Wheat', 'Corn', 'Vegetables'];
const gardenTypes = ['Lawn', 'Vegetable Patch', 'Ornamental Garden'];
const dairyTypes = ['Cows', 'Goats'];
const fishTypes = ['Tilapia', 'Carp', 'Trout'];

const WaterCalculator = () => {
  const [calculatorType, setCalculatorType] = useState('');
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState(null);

  const updateInput = (key, value) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  const calculateWater = () => {
    let dailyWater = 0;
    let yearlyWater = 0;

    switch (calculatorType) {
      case '1': // Livestock
        if (inputs.numAnimals && inputs.waterPerAnimal) {
          dailyWater = Number(inputs.numAnimals) * Number(inputs.waterPerAnimal);
          yearlyWater = dailyWater * 365;
        }
        break;
      case '2': // Irrigation
        if (inputs.area && inputs.waterPerHectare) {
          yearlyWater = Number(inputs.area) * Number(inputs.waterPerHectare) * 1000000; // Convert ML to L
        }
        break;
      case '3': // Household
        if (inputs.residents && inputs.waterPerPerson) {
          dailyWater = Number(inputs.residents) * Number(inputs.waterPerPerson);
          yearlyWater = dailyWater * 365;
        }
        break;
      case '4': // Garden
        if (inputs.gardenArea && inputs.waterPerM2) {
          dailyWater = Number(inputs.gardenArea) * Number(inputs.waterPerM2);
          yearlyWater = dailyWater * 365;
        }
        break;
      case '5': // Dairy Shed
        if (inputs.dairyAnimals && inputs.waterPerDairyAnimal) {
          dailyWater = Number(inputs.dairyAnimals) * Number(inputs.waterPerDairyAnimal);
          yearlyWater = dailyWater * 365;
        }
        break;
      case '6': // Other Agricultural
        yearlyWater = (Number(inputs.spraying) || 0) + 
                      (Number(inputs.cleaning) || 0) + 
                      (Number(inputs.firefighting) || 0);
        yearlyWater *= 1000000; // Convert ML to L
        break;
      case '7': // Aquaculture
        if (inputs.numFish && inputs.waterPerFish) {
          yearlyWater = Number(inputs.numFish) * Number(inputs.waterPerFish) * 1000; // Convert m³ to L
        }
        break;
    }

    setResult({
      daily: dailyWater,
      yearly: yearlyWater,
      yearlyML: yearlyWater / 1000000
    });
  };

  const renderInputs = () => {
    switch (calculatorType) {
      case '1': // Livestock
        return (
          <>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Livestock Type</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={inputs.livestockType}
                  onValueChange={(value) => updateInput('livestockType', value)}
                >
                  <Picker.Item label="Select livestock type" value="" />
                  {livestockTypes.map(type => (
                    <Picker.Item key={type} label={type} value={type} />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Number of Animals</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={inputs.numAnimals}
                onChangeText={(text) => updateInput('numAnimals', text)}
                placeholder="Enter number of animals"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Water per Animal (liters/day)</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={inputs.waterPerAnimal}
                onChangeText={(text) => updateInput('waterPerAnimal', text)}
                placeholder="Enter water per animal"
              />
            </View>
          </>
        );
      case '2': // Irrigation
        return (
          <>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Crop Type</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={inputs.cropType}
                  onValueChange={(value) => updateInput('cropType', value)}
                >
                  <Picker.Item label="Select crop type" value="" />
                  {cropTypes.map(type => (
                    <Picker.Item key={type} label={type} value={type} />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Area (hectares)</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={inputs.area}
                onChangeText={(text) => updateInput('area', text)}
                placeholder="Enter area in hectares"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Water per Hectare (ML/year)</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={inputs.waterPerHectare}
                onChangeText={(text) => updateInput('waterPerHectare', text)}
                placeholder="Enter water per hectare"
              />
            </View>
          </>
        );
      case '3': // Household
        return (
          <>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Number of Residents</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={inputs.residents}
                onChangeText={(text) => updateInput('residents', text)}
                placeholder="Enter number of residents"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Water per Person (liters/day)</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={inputs.waterPerPerson}
                onChangeText={(text) => updateInput('waterPerPerson', text)}
                placeholder="Enter water per person"
              />
            </View>
          </>
        );
      case '4': // Garden
        return (
          <>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Garden Type</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={inputs.gardenType}
                  onValueChange={(value) => updateInput('gardenType', value)}
                >
                  <Picker.Item label="Select garden type" value="" />
                  {gardenTypes.map(type => (
                    <Picker.Item key={type} label={type} value={type} />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Garden Area (m²)</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={inputs.gardenArea}
                onChangeText={(text) => updateInput('gardenArea', text)}
                placeholder="Enter garden area"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Water per m² (liters/day)</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={inputs.waterPerM2}
                onChangeText={(text) => updateInput('waterPerM2', text)}
                placeholder="Enter water per square meter"
              />
            </View>
          </>
        );
      case '5': // Dairy Shed
        return (
          <>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Dairy Type</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={inputs.dairyType}
                  onValueChange={(value) => updateInput('dairyType', value)}
                >
                  <Picker.Item label="Select dairy type" value="" />
                  {dairyTypes.map(type => (
                    <Picker.Item key={type} label={type} value={type} />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Number of Animals</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={inputs.dairyAnimals}
                onChangeText={(text) => updateInput('dairyAnimals', text)}
                placeholder="Enter number of animals"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Water per Animal (liters/day)</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={inputs.waterPerDairyAnimal}
                onChangeText={(text) => updateInput('waterPerDairyAnimal', text)}
                placeholder="Enter water per animal"
              />
            </View>
          </>
        );
      case '6': // Other Agricultural
        return (
          <>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Water for Spraying (ML/year)</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={inputs.spraying}
                onChangeText={(text) => updateInput('spraying', text)}
                placeholder="Enter water for spraying"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Water for Cleaning (ML/year)</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={inputs.cleaning}
                onChangeText={(text) => updateInput('cleaning', text)}
                placeholder="Enter water for cleaning"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Fire-fighting Reserves (ML)</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={inputs.firefighting}
                onChangeText={(text) => updateInput('firefighting', text)}
                placeholder="Enter fire-fighting reserves"
              />
            </View>
          </>
        );
      case '7': // Aquaculture
        return (
          <>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Fish Species</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={inputs.fishType}
                  onValueChange={(value) => updateInput('fishType', value)}
                >
                  <Picker.Item label="Select fish species" value="" />
                  {fishTypes.map(type => (
                    <Picker.Item key={type} label={type} value={type} />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Number of Fish</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={inputs.numFish}
                onChangeText={(text) => updateInput('numFish', text)}
                placeholder="Enter number of fish"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Water per Fish (m³/year)</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={inputs.waterPerFish}
                onChangeText={(text) => updateInput('waterPerFish', text)}
                placeholder="Enter water per fish"
              />
            </View>
          </>
        );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Farm Water Calculator</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Calculator Type</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={calculatorType}
              onValueChange={(value) => {
                setCalculatorType(value);
                setInputs({});
                setResult(null);
              }}
            >
              <Picker.Item label="Select calculator type" value="" />
              {calculatorTypes.map(type => (
                <Picker.Item key={type.id} label={type.name} value={type.id.toString()} />
              ))}
            </Picker>
          </View>
        </View>

        {calculatorType && renderInputs()}

        <TouchableOpacity 
          style={styles.button}
          onPress={calculateWater}
        >
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>

        {result && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultTitle}>Results:</Text>
            {result.daily > 0 && (
              <Text style={styles.resultText}>
                Daily water usage: {result.daily.toLocaleString()} liters
              </Text>
            )}
            <Text style={styles.resultText}>
              Yearly water usage: {result.yearly.toLocaleString()} liters
              ({result.yearlyML.toFixed(3)} megaliters)
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginTop:40,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontFamily:'outfit-bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontFamily:'outfit-bold',
    marginBottom: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor:Colors.PRIMARY,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily:'outfit-bold',
  },
  resultContainer: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 5,
    marginTop: 16,
  },
  resultTitle: {
    fontSize: 18,
    fontFamily:'outfit-bold',
    marginBottom: 8,
  },
  resultText: {
   fontFamily:'outfit',
    fontSize: 16,
    marginBottom: 4,
  },
});

export default WaterCalculator;