import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Plus } from 'lucide-react-native';
import { Link } from 'expo-router';

const MyRecipes = [
  {
    id: 1,
    title: "Homemade Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2940&auto=format&fit=crop",
    time: "45 mins",
    ingredients: 8,
  },
  {
    id: 2,
    title: "Banana Bread",
    image: "https://images.unsplash.com/photo-1605090944525-56aeb7ef05d7?q=80&w=2940&auto=format&fit=crop",
    time: "60 mins",
    ingredients: 6,
  },
];

export default function RecipesScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>My Recipes</Text>
        <TouchableOpacity style={styles.addButton}>
          <Plus size={24} color="#FFFFFF" />
          <Text style={styles.addButtonText}>Add Recipe</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recipesContainer}>
        {MyRecipes.map((recipe) => (
          <Link key={recipe.id} href={`/recipe/${recipe.id}`} asChild>
            <TouchableOpacity style={styles.recipeCard}>
              <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
              <View style={styles.recipeContent}>
                <Text style={styles.recipeTitle}>{recipe.title}</Text>
                <View style={styles.recipeMeta}>
                  <Text style={styles.recipeMetaText}>⏱ {recipe.time}</Text>
                  <Text style={styles.recipeMetaText}>• {recipe.ingredients} ingredients</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      </View>

      <View style={styles.emptyState}>
        <Text style={styles.emptyStateTitle}>Start Your Collection</Text>
        <Text style={styles.emptyStateText}>
          Add your favorite recipes and keep them organized in one place.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 28,
    color: '#1A202C',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF6B6B',
    borderRadius: 12,
    padding: 12,
    gap: 8,
  },
  addButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#FFFFFF',
  },
  recipesContainer: {
    padding: 24,
  },
  recipeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  recipeImage: {
    width: '100%',
    height: 200,
  },
  recipeContent: {
    padding: 16,
  },
  recipeTitle: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 20,
    color: '#1A202C',
    marginBottom: 8,
  },
  recipeMeta: {
    flexDirection: 'row',
    gap: 8,
  },
  recipeMetaText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#4A5568',
  },
  emptyState: {
    padding: 24,
    alignItems: 'center',
  },
  emptyStateTitle: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 20,
    color: '#1A202C',
    marginBottom: 8,
  },
  emptyStateText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#4A5568',
    textAlign: 'center',
  },
});