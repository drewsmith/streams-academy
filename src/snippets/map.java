class Pokemon {
  private String name;
  private int damage;

  Pokemon(String name, int damage) {
    this.name = name;
    this.damage = damage;
  }

  public String getName() {
    return name;
  }

  public int getDamage() {
    return damage;
  }
}

class MapTest {
  @Test
  public void shouldGetPokemonNames() {
    List<Pokemon> pokemon = Arrays.asList(
      new Pokemon("Pikachu", 100),
      new Pokemon("Charmander", 80),
      new Pokemon("Snorlax", 75)
    );

    List<String> pokemonNames = pokemon.stream()
      .// your code here

    List<String> expected = Arrays.asList(
      "Pikachu",
      "Charmander",
      "Charzoid"
    );

    assertThat(pokemonNames, eq(expected));
  }
}
