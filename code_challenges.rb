# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.
# I want to create a method. First thing you want to do when creating a method is using a def and and end.
#  I attempted to look through the syllabus and bravo lecture notes to assist me with this problem but after an hour on this problem I needed to move on. I would like to review this problem so I can practice the correct approach to taking in an array of words and a letter and returns all the words that contain that letter.


# beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
#  letter_o = 'o'
#  def finder(beverages_array) 
#     array.select do |value| 
#         value.downcase.start_with? ("o")
#     end
        
#  end
# p finder beverages_array
# # Expected output: ['coffee', 'soda water']
# letter_t = 't'
# # Expected output: ['tea', 'water', 'soda water']


# #  def word_return(arr)

# #  end




# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

#  album1 = 'Rubber Soul'
# # Expected output: 'Rbbr Sl'
# # album2 = 'Sgt Pepper'
# # Expected output: 'Sgt Pppr'
# album3 = 'Abbey Road'
# # Expected output: 'bby Rd'


# create a method. The method starts with def(defining) and give the method the name.
album1 = 'Rubber Soul'
def remove_vowel(string)   
    # string has a delete method that will remove all matching characters. I wrore down all the vowels and added .delete. This was the easiest method I found worked for me. 
    string.delete("aeiouAEIOU")
end
p remove_vowel album1

album2 = 'Sgt Pepper'
def remove_vowel_2(string)
    string.delete("aeiouAEIOU")
end
p remove_vowel_2 album2 

album3 = 'Abbey Road'
def remove_vowel_3(string)
    string.delete("aeiouAEIOU")
end
p remove_vowel_3 album3

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike 
     attr_accessor :model, :wheeels, :current_speed
    #  adding a class initilaize method that gives all new instances of BIKE a model,wheels, and current speed
    def initilaize(model, wheels, current_speed)
        @model = "model"
        @wheels = 2
        @current_speed = 0
    end
    def get_info
        @model
        @wheels
        @current_speed
    end
    def get_info
      "The #{model} has #{wheels} and is going #{current_speed}"
    end
   

end

# classes challenege was difficult to solve. I understand the basics; everything in Ruby is an object, which means each object is an instance of a class. I know it conists of attributes, followed by a list of methids. In this case the classs atributes model,wheels, and current_speed are what my object is made of. I was trying to print any of the vehicle information and wasnt able to. This is a problem I need to practice on.


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
