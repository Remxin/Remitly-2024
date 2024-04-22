# VALIDATING JSON

## Problem:

The method is written in **Typescript**.
It's verifying the input **JSON** data.

Input data format is defined as **AWS::IAM::Role Policy** 

Method returns a logical false if an input JSON Resource field contains a single asterix - **\***


## Implementation
The method uses recursive approach to check if any of the single fields contains a single asterix as it's value. If it finds array or any json object as the child value then calls appriopriate methods to loop through all the fields.

3 functions were used to solve this problem:
- validJSON
- validArray
- checkIfMatches

### validJSON()
takes as input json object and the loops through it's values. Then invokes the **checkIfMatches** function for every element


### validArray()
takse as input array and loops through it's elements
Invokes **checkIfMatches** function for every element

### checkIfMatches()
Checks if provided data type is an string -> check if it's a single **asterix**.

Otherwise check if data type is an array -> call **validArray()** function to dive deeper into the structure

If two previous scenarios were wrong check if the data type is an object -> call **validJSON()** and dive deeper into the structure


Thanks to recursion no field will be excluded from checking



##### At the end of the file there is also an JSON from AWS website to check the implementation


