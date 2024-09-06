import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined; // No parameters for Home
  LifestyleAndWellnessScreen: { incrementIndex?: () => void }; // Optional parameter
  WorkoutScreen: {
    excersises: {
      id: string;
      image: string;
      name: string;
      sets: number;
    }[];
  };
  Fit: {
    excersises: {
      id: string;
      image: string;
      name: string;
      sets: number;
    }[];
  };
  Rest: {
    incrementIndex: () => void; // Expecting a function as a parameter
  };
  Location: undefined;
  SignUp: undefined; // Add SignUp route here
  Login: undefined; // Assuming you have a Login screen
  Main: undefined;
  Result: undefined
};

// Export the type for use in other components
export type FitnessCardsNavigationProp = StackNavigationProp<RootStackParamList, 'WorkoutScreen'>;
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;
