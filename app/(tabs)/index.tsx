import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const FeaturedRecipe = {
  title: "Creamy Mushroom Risotto",
  image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2940&auto=format&fit=crop",
  time: "45 mins",
  difficulty: "Medium"
};

const PopularRecipes = [
  {
    id: 1,
    title: "Classic Margherita Pizza",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=2940&auto=format&fit=crop",
    time: "30 mins",
  },
  {
    id: 2,
    title: "Chocolate Lava Cake",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=2940&auto=format&fit=crop",
    time: "25 mins",
  },
  {
    id: 3,
    title: "Fresh Summer Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2940&auto=format&fit=crop",
    time: "15 mins",
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Chef! 👋</Text>
        <Text style={styles.title}>What would you like to cook today?</Text>
      </View>

      <TouchableOpacity style={styles.featuredContainer}>
        <Image source={{ uri: FeaturedRecipe.image }} style={styles.featuredImage} />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.gradient}
        >
          <View style={styles.featuredContent}>
            <Text style={styles.featuredTitle}>{FeaturedRecipe.title}</Text>
            <View style={styles.featuredMeta}>
              <Text style={styles.featuredMetaText}>⏱ {FeaturedRecipe.time}</Text>
              <Text style={styles.featuredMetaText}>• {FeaturedRecipe.difficulty}</Text>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Recipes</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {PopularRecipes.map((recipe) => (
            <TouchableOpacity key={recipe.id} style={styles.recipeCard}>
              <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
              <View style={styles.recipeContent}>
                <Text style={styles.recipeTitle}>{recipe.title}</Text>
                <Text style={styles.recipeTime}>⏱ {recipe.time}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
  },
  greeting: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#4A5568',
  },
  title: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 28,
    color: '#1A202C',
    marginTop: 8,
  },
  featuredContainer: {
    margin: 24,
    height: 300,
    borderRadius: 16,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
    justifyContent: 'flex-end',
    padding: 20,
  },
  featuredContent: {
    gap: 8,
  },
  featuredTitle: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 24,
    color: '#FFFFFF',
  },
  featuredMeta: {
    flexDirection: 'row',
    gap: 8,
  },
  featuredMetaText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#FFFFFF',
  },
  section: {
    padding: 24,
  },
  sectionTitle: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 20,
    color: '#1A202C',
    marginBottom: 16,
  },
  recipeCard: {
    width: 200,
    marginRight: 16,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  recipeImage: {
    width: '100%',
    height: 150,
  },
  recipeContent: {
    padding: 12,
  },
  recipeTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#1A202C',
    marginBottom: 4,
  },
  recipeTime: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#4A5568',
  },
});