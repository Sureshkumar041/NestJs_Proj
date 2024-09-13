import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HumanEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { array: true })
  role: string[];

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'boolean' })
  isActive: boolean;
}
