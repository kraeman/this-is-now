class CreateJoinTableValueUser < ActiveRecord::Migration[6.1]
  def change
    create_join_table :values, :users do |t|
      # t.index [:value_id, :user_id]
      # t.index [:user_id, :value_id]
    end
  end
end
