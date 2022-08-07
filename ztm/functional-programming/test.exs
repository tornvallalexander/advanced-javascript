defmodule Title do
  def capitalize_words(words) do
    words
    |> String.split
    |> capitalize_all
    |> join_with_whitespace
  end

  def capitalize_all(arr) do
    Enum.map(arr, &String.upcase/1)
  end

  def join_with_whitespace(arr) do
    Enum.join(arr, " ")
  end
end

IO.inspect Title.capitalize_words("testing this application")