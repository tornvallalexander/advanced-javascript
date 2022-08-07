/*
defmodule MySet do
    defstruct items: []

    def push(set = %{items: items}, item) do
        if Enum.member?(items, item) do
            set

        else
            %{set | items: items ++ [item]}
        end
    end
end

set = %MySet{}
set = MySet.push(set, "apple")
# => ["apple"]

new_set = %MySet{}
new_set = MySet.push(new_set, "pie")
# => ["pie"]

IO.inspect MySet.push(set, "apple")
# => ["apple"]
IO.inspect MySet.push(new_set, "apple")
# => ["pie", "apple"]
 */

function MySet() {
  return [];
}

function push(set = MySet(), item) {
  if (set.includes(item)) {
    return set;
  }

  return [...set, item];
}

let set = MySet();
set = push(set, "apple");
set = push(set, { item: "pie" });

new_set = MySet();
new_set = push(new_set, "pie");

console.log(push(set, { item: "pie" }));
console.log(push(set, "apple"));
console.log(push(new_set, "apple"));