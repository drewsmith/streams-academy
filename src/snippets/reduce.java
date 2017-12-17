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

class ReduceTest {
  @Test
  public void shouldGetTotalDamage() {
    List<Pokemon> pokemon = Arrays.asList(
      new Pokemon("Pikachu", 100),
      new Pokemon("Charmander", 80),
      new Pokemon("Snorlax", 75)
    );

    int totalDamage = pokemon.stream()
      .// your code here

    assertThat(pokemonNames, eq(255));
  }
}
