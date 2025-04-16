import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Search } from 'lucide-react-native';

const Categories = [
  { id: 1, name: 'Breakfast', icon: '🍳' },
  { id: 2, name: 'Lunch', icon: '🥗' },
  { id: 3, name: 'Dinner', icon: '🍝' },
  { id: 4, name: 'Desserts', icon: '🍰' },
  { id: 5, name: 'Drinks', icon: '🍹' },
];

const Recipes = [
  {
    id: 1,
    title: "Avocado Toast",
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?q=80&w=2940&auto=format&fit=crop",
    time: "10 mins",
  },
  {
    id: 2,
    title: "Quinoa Buddha Bowl",
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2940&auto=format&fit=crop",
    time: "20 mins",
  },
  {
    id: 3,
    title: "Grilled Salmon",
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2940&auto=format&fit=crop",
    time: "30 mins",
  },
];

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore Recipes</Text>
        <View style={styles.searchContainer}>
          <Search size={20} color="#4A5568" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search recipes..."
            placeholderTextColor="#A0AEC0"
          />
        </View>
      </View>

      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Categories.map((category) => (
            <TouchableOpacity key={category.id} style={styles.categoryCard}>
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.recipesContainer}>
        <Text style={styles.sectionTitle}>All Recipes</Text>
        {Recipes.map((recipe) => (
          <TouchableOpacity key={recipe.id} style={styles.recipeCard}>
            <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
            <View style={styles.recipeContent}>
              <View>
                <Text style={styles.recipeCategory}>{recipe.category}</Text>
                <Text style={styles.recipeTitle}>{recipe.title}</Text>
              </View>
              <Text style={styles.recipeTime}>⏱ {recipe.time}</Text>
            </View>
          </TouchableOpacity>
        ))}
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
  title: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 28,
    color: '#1A202C',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#1A202C',
  },
  categoriesContainer: {
    padding: 24,
  },
  sectionTitle: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 20,
    color: '#1A202C',
    marginBottom: 16,
  },
  categoryCard: {
    alignItems: 'center',
    marginRight: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    width: 100,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  categoryName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#1A202C',
    textAlign: 'center',
  },
  recipesContainer: {
    padding: 24,
  },
  recipeCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  recipeImage: {
    width: 100,
    height: 100,
  },
  recipeContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  recipeCategory: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#FF6B6B',
    marginBottom: 4,
  },
  recipeTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#1A202C',
  },
  recipeTime: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#4A5568',
  },
});