json.extract! @party, :name
json.guests @party.guests do |guest|
  json.name guest.name
  json.gifts guest.gifts do |gift|
    json.title gift.title
  end
end



# json.extract! @guest, :name, :age, :favorite_color
# json.gifts @guest.gifts do |gift|
#   json.title gift.title
#   json.description gift.description
# end
