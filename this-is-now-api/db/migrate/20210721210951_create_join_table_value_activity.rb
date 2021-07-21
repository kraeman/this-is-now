class CreateJoinTableValueActivity < ActiveRecord::Migration[6.1]
  def change
    create_join_table :values, :activities do |t|
      # t.index [:value_id, :activity_id]
      # t.index [:activity_id, :value_id]
    end
  end
end
