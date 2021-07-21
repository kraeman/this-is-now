class CreateValueUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :value_users do |t|

      t.timestamps
    end
  end
end
