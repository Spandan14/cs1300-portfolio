# chicken_ramen.jpeg    karaage.jpeg          onsen_tamago.jpeg     seasonal_special.jpeg spicy_scallion.jpeg   zaru_udon.jpeg
# extra_noodles.jpeg    miso_caesar.jpeg      potato_koroke.jpeg    shrimp_tempura.jpeg   sumo_katsudon.jpeg

# https://pvdnoodlebar.com/providence-providence-noodle-bar-food-menu

starter_card_infos = [
    ("./assets/miso_caesar.jpeg", "Vegetarian", "Panko<br><br>Parmesan", "Miso Caesar Salad", "Romaine Lettuce with Housemade Miso Caesar Dressing", [], "7"),
    ("./assets/potato_koroke.jpeg", "", "Cherry Tomato<br><br>Tonkatsu Sauce<br><br>Spicy Mustard", "Potato Koroke", "Fried Potato Croquette Served Over Spring Mix", [], "6"),
    ("./assets/karaage.jpeg", "", "Seared Romaine<br><br>Chimichurri<br><br>Ponzu Dipping Sauce<br><br>Spicy Shichimi Aioli", "Karaage", "Lightly Battered Fried Chicken with various sides", [], "8")
]

entree_card_infos = [
    ("./assets/zaru_udon.jpeg", "", "Daikon<br><br>Wasabi<br><br>Seaweed<br><br>Scallion", "Zaru Udon", "Cold Tsuyu Broth with Thick Udon Dipping Noodles", [("Onsen Egg", "2"), ("Shrimp Tempura", "3"), 
                                                                                                                                                ("Egg & Shrimp Tempura", "4")], "13"),
    ("./assets/spicy_scallion.jpeg", "Vegan Option Available", "Nori<br><br>Woodear Mushroom<br><br>Scallion<br><br>Cilantro<br><br>Spicy Garlic Scallion Sauce<br><br>Pickled Onion<br><br>Sesame Oil", "Spicy Scallion Noodles", "With Marinated Mushrooms Tempura-Style, Dry Shanxi Noodles", [("Onsen Egg", "2")], "14"),
    ("./assets/seasonal_special.jpeg", "", "", "Seasonal Special", "Check our pinned Instagram post for details!", [], "15"),
    ("./assets/chicken_ramen.jpeg", "", "Scallion Onion<br><br>Wood Ear Mushroom<br><br>Toasted Seaweed<br><br>Spicy Miso Paste", "PVD Chicken Ramen", "Confit Chicken, Ramen Noodles, Chicken Karaage, House-Made Shoyu Chicken Broth", [], "16"),
    ("./assets/sumo_katsudon.jpeg", "", "Chimichurri<br><br>Tomato<br><br>Pickled Red Onion", "Sumo Katsudon", "16 oz. 24 Hour Braised Pork, White Rice, Sweet Korean Demi Glaze, Japanese Tornado Omelette", [("Sweet Korean Demi Glaze", "0"), ("Curry Sauce", "3")], "21")
]

side_card_infos = [
    ("./assets/onsen_tamago.jpeg", "", "", "Onsen Tomago", "“Hot Springs Egg” - Slow Cooked Soft Boiled Egg",[], "2"),
    ("./assets/shrimp_tempura.jpeg", "", "", "Shrimp Tempura", "Three Pieces of Tempura Fried Shrimp with Tail", [], "3"),
    ("./assets/extra_noodles.jpeg", "", "", "Extra Bowl of Noodles", "More noodles. Udon, Buckwheat, or Ramen", [], "4")

]

def generate_html(card_info):
    image_path, dietary, toppings, name, description, add_ons_data, fullprice = card_info
    add_ons_html = f"""
        <div class="flex flex-col gap-1 mt-4">\n
    """

    for add_on, price in add_ons_data:
        add_ons_html += f"""
          <div class="flex flex-row justify-between w-[90%]">
            <h4 class="font-merriweather text-hotpink lg:text-lg 2xl:text-xl"><i>{add_on}</i></h4>
            <h4 class="font-merriweather text-hotpink lg:text-lg 2xl:text-xl"><i>+{price}</i></h4>
          </div>\n
        """
    
    add_ons_html += "</div>"

    html = f"""
      <div class="bg-white flex flex-col mb-4">
        <div class="h-3/4 flex flex-row">
          <div class="w-3/4 aspect-w-1 aspect-h-1 pr-2">
            <img src="{image_path}" alt="An overhead picture of a {name}" class="w-full h-full object-cover" />
          </div>

          <div class="w-1/4 flex flex-col justify-between">
            <h3 class="font-merriweather text-forest text-xl lg:text-2xl"><i>{dietary}</i></h3>
            <h3 class="font-merriweather text-golden text-xl lg:text-2xl"><i>{toppings}</i></h3>
          </div>
        </div>

        <div class="flex flex-row justify-between gap-2">
          <div class="flex flex-col justify-between w-3/4">
            <h3 class="font-playfair text-4xl 2xl:text-6xl font-bold w-[90%]">{name}</h3>
            <h4 class="font-merriweather lg:text-xl 2xl:text-2xl w-[90%]">{description}</h4>
            {add_ons_html}
          </div>

          <div class="flex flex-col justify-center items-center w-1/4">
            <h3 class="font-montserrat text-graphite">
              <span class="text-2xl">$</span><span class="text-7xl">{fullprice}</span>
            </h3>
          </div>
        </div>
      </div>
    """

    return html

htmls = [generate_html(card_info) for card_info in side_card_infos]

print("\n\n".join(htmls))
