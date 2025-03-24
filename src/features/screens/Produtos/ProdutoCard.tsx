import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Produto } from '../../models/Produto';
import { useProdutoStore } from '../../store/produtos.store';
import { colors } from '../../../core/theme/colors';
import { StackNavigation } from '../../../router';
import { Card } from '@shared/ui';

type Props = {
  produto: Produto;
};

export const ProdutoCard = ({ produto }: Props) => {
  const isFavoritado = useProdutoStore((state) => state.temFavoritado(produto));
  const favoritarProduto = useProdutoStore((state) => state.favoritarProduto);

  const navigation = useNavigation<StackNavigation>();

  const handleDetalhe = () => {
    navigation.navigate('ProdutoDetalhe', {
      produtoId: produto.id.toString()
    });
  };

  return (
    <Card>
      <Image source={{ uri: produto.thumbnail }} resizeMode='contain' style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{produto.title}</Text>

        <Text style={styles.description}>
          {produto.description.substring(0, 90)}...
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleDetalhe}>
            <Text style={styles.buttonText}>DETALHE</Text>
          </TouchableOpacity>
          {!isFavoritado && (

            <TouchableOpacity
              style={[styles.button, styles.favoriteButton]}
              onPress={() => favoritarProduto(produto)}>
              <Text style={styles.favoriteButtonText}>FAVORITAR</Text>
            </TouchableOpacity>
          )}

          {isFavoritado && (
            <TouchableOpacity
              style={[styles.button, styles.removeButton]}
              onPress={() => favoritarProduto(produto)}>
              <Text style={styles.removeButtonText}>REMOVER</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  buttonContainer: {
    marginTop: 20,
    gap: 4
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  favoriteButton: {
    backgroundColor: colors.secondary,
  },
  favoriteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: colors.danger,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
