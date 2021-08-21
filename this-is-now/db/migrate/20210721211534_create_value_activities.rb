class CreateValueActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :value_activities do |t|
      t.references :value, null: false, foreign_key: true
      t.references :activity, null: false, foreign_key: true

      t.timestamps
    end
  end
end
