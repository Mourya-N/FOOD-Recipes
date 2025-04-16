import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Clock, Users, ChefHat } from 'lucide-react-native';

const RecipeDetails = {
  1: {
    id: 1,
    title: "Homemade Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2940&auto=format&fit=crop",
    time: "45 mins",
    servings: 4,
    difficulty: "Medium",
    description: "A classic homemade pizza with a crispy crust and fresh toppings.",
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 tsp salt",
      "1 tsp sugar",
      "2 1/4 tsp active dry yeast",
      "2 tbsp olive oil",
      "1 cup warm water",
      "1 cup pizza sauce",
      "2 cups mozzarella cheese",
      "Your favorite toppings"
    ],
    instructions: [
      {
        step: 1,
        title: "Prepare the Dough",
        description: "In a large bowl, combine flour, salt, sugar, and yeast. Add olive oil and warm water. Mix until a soft dough forms."
      },
      {
        step: 2,
        title: "Knead and Rest",
        description: "Knead the dough for 10 minutes until smooth. Place in a greased bowl, cover, and let rise for 1 hour."
      },
      {
        step: 3,
        title: "Shape and Top",
        description: "Punch down dough and roll out on a floured surface. Transfer to a pizza pan. Spread sauce and add toppings."
      },
      {
        step: 4,
        title: "Bake",
        description: "Bake at 450°F (230°C) for 15-20 minutes until crust is golden and cheese is bubbly."
      }
    ]
  },
  2: {
    id: 2,
    title: "Banana Bread",
    image: "https://images.unsplash.com/photo-1605090944525-56aeb7ef05d7?q=80&w=2940&auto=format&fit=crop",
    time: "60 mins",
    servings: 8,
    difficulty: "Easy",
    description: "Moist and delicious banana bread with a tender crumb.",
    ingredients: [
      "3 ripe bananas, mashed",
      "1/3 cup melted butter",
      "1/2 cup sugar",
      "1 egg",
      "1 tsp vanilla extract",
      "1 tsp baking soda",
      "1/4 tsp salt",
      "1 1/2 cups all-purpose flour",
      "1/2 cup chopped walnuts (optional)"
    ],
    instructions: [
      {
        step: 1,
        title: "Prepare",
        description: "Preheat oven to 350°F (175°C). Butter a 4x8-inch loaf pan."
      },
      {
        step: 2,
        title: "Mix Wet Ingredients",
        description: "In a large bowl, mix mashed bananas with melted butter. Stir in sugar, egg, and vanilla."
      },
      {
        step: 3,
        title: "Add Dry Ingredients",
        description: "Sprinkle baking soda and salt over mixture. Stir in flour. Fold in nuts if using."
      },
      {
        step: 4,
        title: "Bake",
        description: "Pour into prepared loaf pan. Bake for 50-60 minutes until a tester comes out clean."
      }
    ]
  }
};

export default function RecipeDetailScreen() {
  const { id } = useLocalSearchParams();
  const recipe = RecipeDetails[Number(id)];

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Recipe not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      
      <View style={styles.content}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.description}>{recipe.description}</Text>

        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Clock size={20} color="#4A5568" />
            <Text style={styles.metaText}>{recipe.time}</Text>
          </View>
          <View style={styles.metaItem}>
            <Users size={20} color="#4A5568" />
            <Text style={styles.metaText}>{recipe.servings} servings</Text>
          </View>
          <View style={styles.metaItem}>
            <ChefHat size={20} color="#4A5568" />
            <Text style={styles.metaText}>{recipe.difficulty}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          {recipe.ingredients.map((ingredient, index) => (
            <View key={index} style={styles.ingredientItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.ingredientText}>{ingredient}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Instructions</Text>
          {recipe.instructions.map((instruction) => (
            <View key={instruction.step} style={styles.instructionItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{instruction.step}</Text>
              </View>
              <View style={styles.instructionContent}>
                <Text style={styles.instructionTitle}>{instruction.title}</Text>
                <Text style={styles.instructionText}>{instruction.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  image: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 24,
  },
  title: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 32,
    color: '#1A202C',
    marginBottom: 8,
  },
  description: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#4A5568',
    marginBottom: 24,
    lineHeight: 24,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 32,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  metaText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#4A5568',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 24,
    color: '#1A202C',
    marginBottom: 16,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  bullet: {
    fontSize: 20,
    color: '#FF6B6B',
    marginRight: 8,
  },
  ingredientText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#4A5568',
    flex: 1,
  },
  instructionItem: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  stepNumberText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  instructionContent: {
    flex: 1,
  },
  instructionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#1A202C',
    marginBottom: 8,
  },
  instructionText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#4A5568',
    lineHeight: 24,
  },
  errorText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#E53E3E',
    textAlign: 'center',
    marginTop: 24,
  },
});