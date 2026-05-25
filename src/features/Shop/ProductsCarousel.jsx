import { useEffect, useRef } from "react";
import { ScrollView, View, Image, Pressable, StyleSheet } from "react-native";
import ColorTypes from "../../enumsCategories/ColorTypes";
import AppText from "../../components/common/AppText";
import ProductCard from './ProductCard'

export default function ProductsCarousel({products, autoScroll=false}) {
  const widthScroll = products.length*100;
  const scrollRef = useRef(null);
  const scrollX = useRef(0);
  const direction = useRef(1);

useEffect(() => {
  let paused = false;
  const interval = setInterval(() => {
    if (paused) return;
    scrollX.current += direction.current;
    if (scrollX.current >= widthScroll) {
      paused = true;
      direction.current = -1;
      setTimeout(() => {
        paused = false;
      }, 2000);
    }
    if (scrollX.current <= 0) {
      paused = true;
      direction.current = 1;
      setTimeout(() => {
        paused = false;
      }, 2000);
    }
    scrollRef.current?.scrollTo({
      x: scrollX.current,
      animated: false,
    });
  }, 16);

  return () => clearInterval(interval);
}, []);

  if (autoScroll) {
    return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        scrollEnabled={false}
        contentContainerStyle={styles.carousel}
      >
        {products.map((product) => (
          <ProductCard key={product.id} appearButton={false} product={product} />
        ))}
      </ScrollView>
    </View>
  );}
    return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        indicatorStyle={ColorTypes.BLUE}
        contentContainerStyle={styles.carousel}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },

  carousel: {
    paddingHorizontal: 16,
    gap: 16,
  },
});