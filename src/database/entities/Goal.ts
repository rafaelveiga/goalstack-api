import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Goal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  goalTitle: string;
}
