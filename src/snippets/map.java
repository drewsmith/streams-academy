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

class MapExample {
  public static void main(String[] args) {
    List<Pokemon> pokemon = new ArrayList<Pokemon>();
    pokemon.add(new Pokemon("Pikachu", 100));
    pokemon.add(new Pokemon("Charmander", 80));
    pokemon.add(new Pokemon("Charzoid", 75));

    List<String> pokemonNames = pokemon.stream()
      .// your code here

    System.out.println(pokemonNames);
  }
}
